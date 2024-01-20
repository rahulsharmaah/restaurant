import React from "react";

import { Button, Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img className="h-[51px]" src="images/img_logo.svg" alt="logo" />
        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center mb-3.5 md:ml-[0] ml-[107px] md:mt-0 mt-[9px] w-[52%] md:w-full">
          <div className="flex flex-col items-center justify-start w-[9%] sm:w-full">
            <Text
              className="text-base text-red-400"
              size="txtOpenSansRegular16Red400"
            >
              Home
            </Text>
            <Line className="bg-red-400 h-px mt-[3px] w-full" />
          </div>
          <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
            <Text
              className="text-base text-gray-900_cc"
              size="txtOpenSansRegular16Gray900cc"
            >
              Menu
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
            <Text
              className="text-base text-gray-900_cc"
              size="txtOpenSansRegular16Gray900cc"
            >
              About us
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
            <Text
              className="text-base text-gray-900_cc"
              size="txtOpenSansRegular16Gray900cc"
            >
              Order online
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[27px]">
            <Text
              className="text-base text-gray-900_cc"
              size="txtOpenSansRegular16Gray900cc"
            >
              Reservation
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
            <Text
              className="text-base text-gray-900_cc"
              size="txtOpenSansRegular16Gray900cc"
            >
              Contact us
            </Text>
          </div>
        </div>
        <Button
          className="cursor-pointer flex h-[50px] items-center justify-center md:ml-[0] ml-[122px] w-[50px]"
          rightIcon={
            <Img
              className="h-6 ml-[13px]"
              src="images/img_cart.svg"
              alt="cart"
            />
          }
          shape="circle"
          color="white_A700"
          size="md"
          variant="fill"
        ></Button>
        <Button
          className="cursor-pointer font-poppins font-semibold leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
          shape="round"
          color="red_400"
          size="lg"
          variant="fill"
        >
          Log in
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
