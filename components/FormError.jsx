import Image from "next/image";

const FormError = ({ error }) => {
  return (
    <div className="flex gap-[4px] items-center absolute sm:left-0 md:right-0 bottom-[-24px]">
      <Image src="/icons/error.svg" width={18} height={18} alt="Error" />
      <p className="text-[12px] font-extralight leading-[24px] tracking-[2.4px] text-[#FF5757]">{error}</p>
    </div>
  );
};

export default FormError;
