import React from "react";

import { Button, Img, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[75px] mt-[70px] mx-auto w-[78%]">
          <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start mb-[11px] w-[32%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    className="h-[51px]"
                    src="images/img_logo.svg"
                    alt="logo_One"
                  />
                  <Text
                    className="leading-[40.00px] mt-[45px] text-gray-300 text-xl w-full"
                    size="txtInterRegular20Gray300"
                  >
                    Viverra gravida morbi egestas facilisis tortor netus non
                    duis tempor.{" "}
                  </Text>
                  <div className="flex flex-row gap-[30px] items-center justify-start md:ml-[0] ml-[3px] mt-20 w-[69%] md:w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                      shape="circle"
                      color="gray_300_01"
                      size="lg"
                      variant="fill"
                    >
                      <Img
                        className="h-[30px]"
                        src="images/img_twitter.png"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                      shape="circle"
                      color="blue_gray_100"
                      size="lg"
                      variant="fill"
                    >
                      <Img
                        className="h-[30px]"
                        src="images/img_instagram.png"
                        alt="instagram"
                      />
                    </Button>
                    <Button
                      className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                      shape="circle"
                      color="blue_gray_100"
                      size="lg"
                      variant="fill"
                    >
                      <Img
                        className="h-[30px]"
                        src="images/img_facebook.png"
                        alt="facebook"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[39px] items-start justify-start md:mt-0 mt-3 w-[11%] md:w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-red-400"
                  size="txtInterRegular25"
                >
                  Page
                </Text>
                <ul className="flex flex-col items-start justify-start w-full common-column-list">
                  <li>
                    <Text
                      className="text-gray-300 text-xl"
                      size="txtInterRegular20Gray300"
                    >
                      Home
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-[30px] text-gray-300 text-xl"
                      size="txtInterRegular20Gray300"
                    >
                      Menu
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-[29px] text-gray-300 text-xl"
                      size="txtInterRegular20Gray300"
                    >
                      Order online
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-8 text-gray-300 text-xl"
                      size="txtInterRegular20Gray300"
                    >
                      Catering
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-[27px] text-gray-300 text-xl"
                      size="txtInterRegular20Gray300"
                    >
                      Reservation
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex md:flex-1 flex-col gap-[42px] items-start justify-start md:mt-0 mt-[9px] w-[13%] md:w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-red-400"
                  size="txtInterRegular25"
                >
                  Information
                </Text>
                <ul className="flex flex-col gap-[29px] items-start justify-start md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-gray-300 text-xl"
                      size="txtInterRegular20Gray300"
                    >
                      About us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-gray-300 text-xl"
                      size="txtInterRegular20Gray300"
                    >
                      Testimonial
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-gray-300 text-xl"
                      size="txtInterRegular20Gray300"
                    >
                      Event
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start md:mt-0 mt-[9px] w-[26%] md:w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-red-400"
                  size="txtInterRegular25"
                >
                  Get in touch
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="leading-[30.00px] text-gray-300 text-xl w-full"
                    size="txtInterRegular20Gray300"
                  >
                    3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat
                  </Text>
                  <Text
                    className="mt-6 text-gray-300 text-xl"
                    size="txtInterRegular20Gray300"
                  >
                    delizioso@gmail.com
                  </Text>
                  <Text
                    className="mt-7 text-gray-300 text-xl"
                    size="txtInterRegular20Gray300"
                  >
                    +123 4567 8901
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="text-gray-300_01 text-xl"
              size="txtInterRegular20Gray30001"
            >
              Copyright © 2022 Foodio
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
