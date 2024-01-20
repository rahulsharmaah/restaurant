import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer1 from "components/Footer1";

const AboutusOnePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[117px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img className="h-[51px]" src="images/img_logo.svg" alt="logo" />
            <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-[9px] w-[52%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-base text-gray-900_cc"
                  size="txtOpenSansRegular16Gray900cc"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                <Text
                  className="text-base text-gray-900_cc"
                  size="txtOpenSansRegular16Gray900cc"
                >
                  Menu
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start ml-8 sm:ml-[0] w-[12%] sm:w-full">
                <Text
                  className="text-base text-red-400"
                  size="txtOpenSansRegular16Red400"
                >
                  About us
                </Text>
                <Line className="bg-red-400 h-px mt-1 w-[69%]" />
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
                <a href="javascript:" className="text-base text-gray-900_cc">
                  <Text size="txtOpenSansRegular16Gray900cc">Contact us</Text>
                </a>
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
              className="cursor-pointer leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
              shape="round"
              color="red_400"
              size="2xl"
              variant="fill"
            >
              Log in
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[78px] w-full">
            <div className="md:h-[541px] h-[543px] relative w-[543px] sm:w-full">
              <div className="bg-blue_gray-100_63 flex flex-col sm:h-auto h-full items-center justify-start m-auto p-[52px] md:px-10 sm:px-5 rounded-[271px] w-[543px]">
                <div className="bg-blue_gray-100_6c h-[437px] rounded-[218px] w-[437px]"></div>
              </div>
              <Img
                className="absolute h-[346px] inset-[0] justify-center m-auto rounded-[50%] w-[346px]"
                src="images/img_unsplashebmyh7oo5wy.png"
                alt="unsplashebmyh7o"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[35px] items-start justify-start w-[39%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="leading-[57.00px] sm:text-[38px] md:text-[44px] text-[52px] text-red-400"
                  size="txtTinosBold52"
                >
                  <span className="text-gray-900_02 font-opensans text-left font-bold leading-[normal]">
                    <>
                      About Our <br />
                    </>
                  </span>
                  <span className="text-red-400 font-opensans text-left font-bold leading-[normal]">
                    Restaurant
                  </span>
                </Text>
                <Text
                  className="leading-[40.00px] text-gray-800_01 text-xl w-full"
                  size="txtInterRegular20"
                >
                  This dish is full of flavor and nutrition! Quinoa is a
                  complete protein, providing all the essential amino acids your
                  body needs, and is also a good source of fiber.
                </Text>
              </div>
              <Button
                className="cursor-pointer min-w-[232px] py-6 text-center text-xl"
                shape="round"
                color="red_400"
                variant="fill"
              >
                Order now
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[120px] w-full">
            <Text
              className="leading-[40.00px] md:mt-0 mt-[120px] text-gray-800_01 text-xl"
              size="txtInterRegular20"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </Text>
            <div className="md:h-[559px] h-[560px] relative w-[560px] sm:w-full">
              <div className="bg-blue_gray-100_63 flex flex-col sm:h-auto h-full items-center justify-start m-auto p-[57px] md:px-10 sm:px-5 rounded-[50%] w-[560px]">
                <div className="bg-blue_gray-100_63 h-[445px] rounded-[222px] w-[445px]"></div>
              </div>
              <Img
                className="absolute h-[354px] inset-[0] justify-center m-auto rounded-[50%] w-[354px]"
                src="images/img_unsplash5dszncvdhd0.png"
                alt="unsplash5dszncv"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[120px] w-full">
            <Img
              className="h-[629px] md:h-auto object-cover"
              src="images/img_unsplashlrawct7uwhy.png"
              alt="unsplashlrawctSeven"
            />
            <div className="flex flex-col gap-[45px] items-start justify-start">
              <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                <Text
                  className="leading-[72.00px] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900 w-full"
                  size="txtTinosBold52Gray900"
                >
                  <span className="text-red-400 font-opensans text-left font-bold">
                    Owner
                  </span>
                  <span className="text-orange-600 font-opensans text-left font-bold">
                    {" "}
                  </span>
                  <span className="text-gray-900 font-opensans text-left font-bold">
                    & Executive Chef
                  </span>
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-800_01"
                  size="txtInterRegular40"
                >
                  Ismail Marzuki
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="md:text-5xl text-[80px] text-amber-800_6c"
                  size="txtTinosBold80"
                >
                  “
                </Text>
                <Text
                  className="leading-[60.00px] text-3xl sm:text-[26px] md:text-[28px] text-gray-800_01 w-[92%] sm:w-full"
                  size="txtInterRegular30"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text
                  className="md:ml-[0] ml-[452px] rotate-[-4deg] md:text-5xl text-[80px] text-amber-800_6c"
                  size="txtTinosBold80"
                >
                  “
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="bg-gray-900_01 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutusOnePage;
