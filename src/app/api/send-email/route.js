// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  console.log("Email API route called");
  
  // Log environment variables (partially, for security)
  console.log("Email User:", process.env.EMAIL_USER ? "Set (first 3 chars: " + process.env.EMAIL_USER.substring(0, 3) + "...)" : "Not set");
  console.log("Email Password:", process.env.EMAIL_PASSWORD ? "Set (length: " + process.env.EMAIL_PASSWORD.length + ")" : "Not set");
  
  try {
    // Parse the request body
    const { to, from, subject, formData, formType, attachments } = await request.json();
    
    // Log the received form data (without sensitive info)
    console.log("Form data received - type:", formType, "fields:", Object.keys(formData));
    console.log("Attachments:", attachments ? `${attachments.length} file(s)` : "None");
    
    // Create nodemailer transport
    console.log("Creating transport...");
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    
    // Verify connection
    console.log("Verifying connection...");
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      throw verifyError;
    }
    
    // Format the form data for email (dynamic approach)
    const htmlContent = formatDynamicEmail(formData, formType);
    const textContent = createTextVersion(formData, formType);
    
    // Prepare email configuration
    const mailOptions = {
      from: from || process.env.EMAIL_USER,
      to: to || process.env.EMAIL_USER, 
      subject: subject || `New ${formType || 'Form'} Submission`,
      text: textContent,
      html: htmlContent,
      replyTo: formData.email || formData.Email || formData.mail || from || process.env.EMAIL_USER
    };
    
    // Add attachments if they exist
    if (attachments && attachments.length > 0) {
      console.log(`Processing ${attachments.length} file attachment(s)`);
      
      // Add attachments to mail options
      mailOptions.attachments = attachments.map(attachment => ({
        filename: attachment.filename,
        content: attachment.content,
        encoding: 'base64',
        contentType: attachment.contentType
      }));
    }
    
    // Send email
    console.log("Sending email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return error response with detailed info
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email', 
        error: error.message,
        code: error.code,
        command: error.command
      },
      { status: 500 }
    );
  }
}

// Dynamic email formatter that works with any form
function formatDynamicEmail(data, formType) {
  // Create title based on formType
  const formTitle = formType || 'Form Submission';
  
  let html = `
    <h1>${formTitle}</h1>
  `;
  
  // Group fields by common prefixes or types
  const groupedFields = groupFieldsByType(data, formType);
  
  // Create a section for each group
  Object.keys(groupedFields).forEach(groupName => {
    const fields = groupedFields[groupName];
    
    // Only create section if there are fields
    if (Object.keys(fields).length > 0) {
      html += `
        <h2>${formatGroupName(groupName)}</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <tr>
            <th style="background-color: #f2f2f2; text-align: left;">Field</th>
            <th style="background-color: #f2f2f2; text-align: left;">Value</th>
          </tr>
      `;
      
      // Add all fields in this group
      Object.keys(fields).forEach(fieldId => {
        const value = fields[fieldId];
        const fieldName = formatFieldName(fieldId);
        
        html += `
          <tr>
            <td><strong>${fieldName}</strong></td>
            <td>${formatFieldValue(value) || 'N/A'}</td>
          </tr>
        `;
      });
      
      html += `</table>`;
    }
  });
  
  // Add file attachment information if files are detected
  const hasFileInfo = Object.keys(data).some(key => 
    typeof data[key] === 'string' && 
    data[key].startsWith('File:')
  );
  
  if (hasFileInfo) {
    html += `
      <div style="margin-top: 20px; padding: 10px; background-color: #f8f9fa; border-left: 4px solid #4EBA64;">
        <p style="margin: 0; color: #333;"><strong>Note:</strong> File attachments are included with this submission. Please check the attachments section of this email.</p>
      </div>
    `;
  }
  
  // Add submission timestamp
  html += `
    <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
  `;
  
  return html;
}

// Group fields by type based on their IDs or formType
function groupFieldsByType(data, formType) {
  const groups = {
    personal: {},
    car: {},
    insurance: {}, 
    medical: {},
    contact: {},
    document: {},
    other: {}
  };
  
  // Helper function to check if field belongs to a group
  const isPersonalField = id => /person|name|email|contact|phone|mobile|address|city|pin|zip|pan|birth|dob|age/i.test(id);
  const isCarField = id => /car|make|model|fuel|transmission|year|kilometers|ownership|location/i.test(id);
  // Update insurance pattern to include coverage and period
  const isInsuranceField = id => /insurance|coverage|period|plan|policy|premium|deductible|copay|benefit|brand|type/i.test(id);
  const isMedicalField = id => /medical|health|doctor|hospital|treatment|diagnosis|condition|symptom/i.test(id);
  const isContactField = id => /contact|email|phone|preferred|additional/i.test(id) && !isPersonalField(id);
  const isDocumentField = id => /file|upload|document|photo|image|selfie|signature|cheque/i.test(id);
  
  // Assign each field to a group
  Object.keys(data).forEach(fieldId => {
    // Skip objects like file data
    if (typeof data[fieldId] === 'object' && data[fieldId] !== null && !(data[fieldId] instanceof Date)) {
      return;
    }
    
    // Determine which group this field belongs to
    if (isPersonalField(fieldId) && !isInsuranceField(fieldId)) {  // Make sure insurance fields don't get categorized as personal
      groups.personal[fieldId] = data[fieldId];
    } else if (isCarField(fieldId)) {
      groups.car[fieldId] = data[fieldId];
    } else if (isInsuranceField(fieldId)) {
      groups.insurance[fieldId] = data[fieldId];
    } else if (isMedicalField(fieldId)) {
      groups.medical[fieldId] = data[fieldId];
    } else if (isContactField(fieldId)) {
      groups.contact[fieldId] = data[fieldId];
    } else if (isDocumentField(fieldId)) {
      groups.document[fieldId] = data[fieldId];
    } else {
      groups.other[fieldId] = data[fieldId];
    }
  });
  
  // Return the grouped fields - THIS WAS MISSING
  return groups;
}

// Format group names for display
function formatGroupName(groupName) {
  switch(groupName) {
    case 'personal':
      return 'Personal Information';
    case 'car':
      return 'Car Details';
    case 'insurance':
      return 'Insurance Details';
    case 'medical':
      return 'Medical Information';
    case 'contact':
      return 'Contact Information';
    case 'document':
      return 'Uploaded Documents';
    case 'other':
      return 'Additional Information';
    default:
      return groupName.charAt(0).toUpperCase() + groupName.slice(1) + ' Information';
  }
}

// Format field names for display
function formatFieldName(fieldId) {
  return fieldId
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
    .trim(); // Remove any leading/trailing spaces
}

// Format field values appropriately
function formatFieldValue(value) {
  if (value === undefined || value === null) {
    return 'N/A';
  }
  
  if (typeof value === 'string' && value.includes('\n')) {
    // Format multiline text (e.g., from textarea)
    return value.replace(/\n/g, '<br>');
  }
  
  return String(value);
}

// Create text version of the email
function createTextVersion(data, formType) {
  const formTitle = formType || 'Form Submission';
  let text = `${formTitle.toUpperCase()}\n\n`;
  
  // Group fields by type
  const groupedFields = groupFieldsByType(data, formType);
  
  // Add each group
  Object.keys(groupedFields).forEach(groupName => {
    const fields = groupedFields[groupName];
    
    // Only create section if there are fields
    if (Object.keys(fields).length > 0) {
      text += `${formatGroupName(groupName).toUpperCase()}\n`;
      text += ''.padEnd(formatGroupName(groupName).length, '=') + '\n';
      
      // Add all fields in this group
      Object.keys(fields).forEach(fieldId => {
        const value = fields[fieldId];
        const fieldName = formatFieldName(fieldId);
        
        text += `${fieldName}: ${value || 'N/A'}\n`;
      });
      
      text += '\n';
    }
  });
  
  // Add file attachment info if relevant
  const hasFileInfo = Object.keys(data).some(key => 
    typeof data[key] === 'string' && 
    data[key].startsWith('File:')
  );
  
  if (hasFileInfo) {
    text += 'NOTE: File attachments are included with this submission.\n\n';
  }
  
  // Add submission timestamp
  text += `Submitted on: ${new Date().toLocaleString()}`;
  
  return text;
}