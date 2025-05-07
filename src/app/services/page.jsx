import React from 'react'
import GreenImageHero from '@/components/greenimagehero'
import RESection from '@/components/propertycarsection'
import PropertyCarousel from '@/components/propertycardsection';


function services() {
  const featuredProperties = [
    {
      price: "Rs. 1.5 Crore",
      title: "Apartment",
      imageSrc: "/images/apartment1.jpg",
      location: "Mumbai",
      beds: "2 Beds",
      area: "1,200 sq. ft."
    },
    // Add more properties...
  ];
  return (
    <div><GreenImageHero 
    title="Real Estate Services"
    description="Our team of experienced professionals brings a wealth of knowledge and expertise to every client engagement. With specialists in insurance, stock market investing, finance, real estate, and more, we have the skills and resources to handle all your financial needs."
    imageSrc="/Rectangle 37.jpg"
    imageAlt="Modern luxury home with pool"
    reverseLayout={false}
  />
  <RESection
  title="Our Real Estate Services"
  subtitle="Residential, Commercial & Transactional Expertise Under One Roof"
  cards={[
    {
      title: "Residential Properties",
      imageSrc: "/Rectangle 32.jpg",
      listItems: [
        "Apartments",
        "Villas",
        "Plots",
        "Independent Houses"
      ],
      link: "/properties/residential"
    },
    {
      title: "Commercial Properties",
      imageSrc: "/Rectangle 32.jpg",
      listItems: [
        "Office Spaces",
        "Retail Shops",
        "Warehouses",
        "Co-working Spaces"
      ],
      link: "/properties/commercial"
    },
    {
      title: "Industrial Properties",
      imageSrc: "/Rectangle 32.jpg",
      listItems: [
        "Manufacturing Units",
        "Factories",
        "Industrial Plots",
        "Storage Facilities"
      ],
      link: "/properties/industrial"
    }
  ]}
/>

<PropertyCarousel
  title="Featured Properties"
  subtitle="Explore Our Latest Listings Across Prime Locations"
  buttonText="View More Properties"
  buttonLink="/properties"
  properties={[
    {
      price: "Rs. 1.5 Crore",
      title: "Apartment",
      imageSrc: "/images/apartment1.jpg",
      location: "Mumbai",
      beds: "2 Beds",
      area: "1,200 sq. ft."
    },
    // Add more properties...
  ]}
/>
  </div>
  )
}

export default services