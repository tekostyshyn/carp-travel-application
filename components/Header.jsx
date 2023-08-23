"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { karantina } from "@app/layout";
import MenuButton from "./MenuButton";
import MenuNav from "./MenuNav";
import BackDrop from "./Backdrop";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Header = () => {
  const [isMobMenuOpen, setMobMenuOpen] = useState(false);

  const handleMenuClick = () => {
    isMobMenuOpen ? setMobMenuOpen(false) : setMobMenuOpen(true);
  };

  const handleScroll = () => {
    setMobMenuOpen(false);
  };

  useEffect(() => {
    if (isMobMenuOpen) disableBodyScroll(document);
    if (!isMobMenuOpen) enableBodyScroll(document);
  }, [isMobMenuOpen]);

  return (
    <>
      <header className="w-full absolute sm:top-[36px] md:top-[39px] lg:top-[34px] z-30">
        <div className="container md:mx-auto flex justify-between	align-center ">
          <div className="flex flex-col w-[61px] h-[33px]">
            <Image src="/icons/logo.svg" width={59} height={21} alt="CarpTravel logo" />
            <div className={karantina.className}>
              <p className="text-base font-normal tracking-[2.59px] leading-none	">CarpTravel</p>
            </div>
          </div>
          <MenuButton onClick={handleMenuClick} title="Menu" />
          <MenuNav addClasses="sm:hidden" onClick={handleScroll} />
        </div>
      </header>
      {isMobMenuOpen && <BackDrop onClick={handleMenuClick} />}
    </>
  );
};

export default Header;
