"use client";
import { Link } from "react-scroll";

const MenuNav = ({ addClasses, onClick }) => {
  const classes = `sm:text-lg md:text-base font-normal leading-normal flex sm:flex-col sm:gap-[48px] md:gap-[24px] lg:gap-[56px] items-center sm:tracking-[1.8px] md:tracking-[1.4px] ${addClasses}`;

  return (
    <ul className={classes}>
      <li onClick={onClick}>
        <Link to="gallery" spy={true} smooth={true} duration={500} onSetActive={onClick} className="menu_link">
          Gallery
        </Link>
      </li>
      <li>
        <Link to="contacts" spy={true} smooth={true} duration={500} onSetActive={onClick} className="menu_link">
          Contacts
        </Link>
      </li>
    </ul>
  );
};

export default MenuNav;
