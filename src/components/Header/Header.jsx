import Image from "next/image";
import React from "react";
import Logo from "../../img/godlogo.png";
import s from "./header.module.css";
import { BsTelephoneFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.main}>
          <div className={s.logo}>
            <Image src={Logo} alt="godmien logo" />
          </div>
          <div className={s.support}>
            <span>
              <BsTelephoneFill /> Support:{" "}
              <a href="tel:+916201125445">+91 6201125445</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
