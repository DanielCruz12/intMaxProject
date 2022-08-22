import React from "react";
import { discount, robot } from "../assets";
import Button from "../components/Button";
import styles from "../style";

const Hero = () => {
  return (
    <section id="" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} className="w-[32px] h-[32px]" alt="discount" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            Discount for
            <span className="text-white"> 1 Month </span>
            Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The next generation
            <br className="sm:block hidden" />
            <span className="text-gradient">payment </span>method
          </h1>
          <div className="ss:flex hidden md:mr-6 mr-0">
            <Button />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
          es simplemente el texto de relleno de las imprentas y archivos de
          texto. Lorem Ipsum ha sido el texto de relleno estándar de las
          industrias desde el año 1500, cuando un impresor.
        </p>

        <h1 className="flex-1 font-poppins font-semibold ss:text-[72] text-[52px] text-white ss:leading-[100px] leading-[75px]"></h1>
      </div>

      <div>
        <img
          src={robot}
          className="w-[100%] h-[100%] relative z-[5]"
          alt="robot"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[35%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
