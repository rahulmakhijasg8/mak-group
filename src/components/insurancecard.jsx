import Image from 'next/image';

const InsuranceCard = ({
  icon,
  title,
  description,
  link = '#',
  linkbtn = false,
  accentColor = '#FF9F43',
}) => {
  return (
    <div
      className="bg-[#FAFAFA] w-full border-[1px] border-[#EBEBEB] rounded-[40px] md:rounded-[34px] p-5 md:p-6 overflow-auto mx-auto h-full"
    >
      {/* Icon */}
      {icon && (
        <div className="flex justify-center items-center mb-8">
          <div className="flex rounded-[10px] justify-center items-center w-20 h-20 bg-white">
            <Image
              src={icon}
              alt="Insurance Icon"
              width={500}
              height={500}
              className="w-16 h-16"
            />
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-[600] text-[#000000] mb-2 text-center">
        {title}
      </h3>

      {/* Description */}
      <div className="text-center px-2">
        {description}
      </div>
    </div>
  );
};

export default InsuranceCard;
