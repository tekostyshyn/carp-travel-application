"use client";

import Button from "./Button";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_gradient"></div>
      <div className="container md:mx-auto flex sm:flex-col sm:gap-[24px] z-20 relative sm:pt-[76px] md:justify-between">
        <div className="flex flex-col sm:gap-[24px] md:gap-[68px] lg:gap-[148px] md:w-[426px] lg:w-[646px]">
          <h1 className="md:h-[243px] lg:h-[357px] sm:text-xl md:text-[67px] lg:text-[98px] md:tracking-[-2.68px] lg:tracking-[-3.92px] uppercase font-thin md:leading-tight;">
            <span className="font-medium">Uncover </span>Carpathian’s Secrets
          </h1>
          <p className="sm:text-sm md:text-[14px] lg:text-[16px] md:tracking-[1.26px] md:leading-[16px] lg:tracking-[1.44px] lg:leading-[24px] font-extralight sm:w-[157px] md:w-[263px] lg:w-full">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="flex flex-col sm:gap-[24px] md:w-[230px] lg:w-[305px]">
          <div className="sm:w-[118px] md:w-[230px] lg:w-[305px] sm:h-[52px] md:h-[88px] lg:h-[123px] flex flex-col uppercase leading-none sm:absolute top-0 right-[20px] md:mb-[56px] lg:mb-[181px]">
            <div className="sm:text-[37px] md:text-[67px] lg:text-[98px] sm:h-[45px] md:h-[81px] lg:h-[119px] flex lg:gap-[8px]">
              <p className="font-medium">7</p>
              <p className="font-thin sm:tracking-[1.665px] md:tracking-[8.71px] lg:tracking-normal">days</p>
            </div>
            <p className="sm:text-[12px] md:text-[14px] lg:text-[16px] sm:h-[15px] md:h-[17px] lg:h-[19px] font-light sm:tracking-[9.48px] md:tracking-[25.9px] lg:tracking-[36.48px]">
              journey
            </p>
          </div>
          <p className="sm:text-base md:text-[16px] md:leading-[20px] lg:text-[18px] lg:leading-[24px] font-extralight text-justify md:mb-[28px]">
            We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy
            stunning views, exciting expeditions, and the best service!
          </p>
          <Button>
            <Link to="contacts" spy={true} smooth={true} duration={500}>
              Join now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
