import React from "react";
import { bg } from "../assets";
import { Button } from "../components";
import styles from "../style";

export const Hero = () => {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          id="home"
          className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
          <div
            className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
          >
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 mt-14 md:mt-4">
              
              <p className={`${styles.paragraph} ml-2`}>
                <span className="text-white">Claim a </span>
                welcome 
                <span className="text-white"> bonus </span>
                
              </p>
            </div>

            <div className="flex flex-row justify-center items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
                The Next <br className="sm:block hidden" />{" "}
                <span className="text-gradient">Generation of </span>{" "}
              </h1>
              <div className="ss:flex hidden md:mr-4 mr-0">
                <Button />
              </div>
            </div>

            <h1 className="font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            lightning wallet
            </h1>
            <p className={`${styles.paragraph} max-w-[570px] mt-7 pt-3`}>
              Wallet for interacting with Intmax, a network of smart contracts
              for Lightning Network users. converts the lightning network's satoshi into native tokens e-Sat for the POA network built on geth, which can then be used for Dapps and SmartContract with cheap gas fees.
            </p>
          </div>

          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <img
              src={bg}
              className="w-[100%] h-[100%] relative z-[5]"
              alt="robot"
            />
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
            <div className="absolute z-[1] w-[80%] h-[35%] rounded-full bottom-40 white__gradient"></div>
          </div>

          <div className={`ss:hidden ${styles.flexCenter}`}>
            <Button />
          </div>
        </section>
      </div>
    </div>
  );
};
