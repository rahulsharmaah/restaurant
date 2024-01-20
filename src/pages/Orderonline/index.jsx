import React from "react";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import Footer from "components/Footer";

const OrderonlinePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[140px] items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start max-w-[1112px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start w-full">
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
                <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                  <Text
                    className="text-base text-gray-900_cc"
                    size="txtOpenSansRegular16Gray900cc"
                  >
                    About us
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[31px] w-[17%] sm:w-full">
                  <Text
                    className="text-base text-red-400"
                    size="txtOpenSansRegular16Red400"
                  >
                    Order online
                  </Text>
                  <Line className="bg-red-400 h-px mt-1 w-[49%]" />
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
                className="cursor-pointer font-semibold leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
                shape="round"
                color="red_400"
                size="lg"
                variant="fill"
              >
                Log in
              </Button>
            </div>
            <Text
              className="md:ml-[0] ml-[456px] mt-[103px] md:text-5xl text-[80px] text-gray-900"
              size="txtOpenSansBold80"
            >
              Menu
            </Text>
            <div className="flex sm:flex-col flex-row font-poppins gap-7 items-center justify-between mt-[69px] w-full">
              <Button
                className="cursor-pointer min-w-[192px] py-[22px] text-center text-xl"
                shape="round"
                color="gray_400_63"
                variant="fill"
              >
                All Categories
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[232px] py-[22px] text-center text-xl"
                shape="round"
                color="red_400"
                variant="fill"
              >
                Pasta
              </Button>
              <Button
                className="cursor-pointer min-w-[192px] py-[22px] text-center text-xl"
                shape="round"
                color="gray_400_63"
                variant="fill"
              >
                Pizza
              </Button>
              <Button
                className="cursor-pointer min-w-[192px] py-[22px] text-center text-xl"
                shape="round"
                color="gray_400_63"
                variant="fill"
              >
                Dessert
              </Button>
              <Button
                className="cursor-pointer min-w-[192px] py-[22px] text-center text-xl"
                shape="round"
                color="gray_400_63"
                variant="fill"
              >
                Drink
              </Button>
            </div>
            <div className="flex md:flex-col flex-row font-poppins md:gap-[46px] items-center justify-between mt-[69px] w-full">
              <div className="flex md:flex-1 flex-col gap-[50px] items-start justify-start w-[66%] md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-[18%] md:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtPoppinsSemiBold30"
                  >
                    PASTA
                  </Text>
                  <Line className="bg-red-400 h-px outline outline-[0.5px] outline-black-900 w-full" />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-5 rounded-[45px] w-full">
                        <div className="flex flex-col h-[173px] items-center justify-start w-[173px]">
                          <Img
                            className="h-[173px] md:h-auto rounded-[50%] w-[173px]"
                            src="images/img_kisspngitalian.png"
                            alt="kisspngitalian"
                          />
                        </div>
                        <Text
                          className="mt-[21px] text-center text-gray-900 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Spaghetti
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[5px] w-[57%] md:w-full">
                          <div className="flex flex-row items-center justify-evenly w-full">
                            <RatingBar
                              className="flex justify-between w-[103px]"
                              value={5}
                              starCount={5}
                              activeColor="#f54748"
                              size={15}
                            ></RatingBar>
                          </div>
                        </div>
                        <Text
                          className="mt-[11px] text-center text-gray-800_01 text-xs w-[94%] sm:w-full"
                          size="txtPoppinsRegular12"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat
                        </Text>
                        <Text
                          className="mt-[22px] text-gray-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $12.05
                        </Text>
                        <div className="bg-gray-50_01 flex flex-row items-center justify-center mt-2.5 rounded-[16px] w-[66%] md:w-full">
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                            rightIcon={
                              <div className="ml-[11px] outline-black-900 outline-[0.5px] outline bg-red-500">
                                <Img
                                  src="images/img_vector_25.svg"
                                  alt="Vector 25"
                                />
                              </div>
                            }
                            shape="round"
                            color="white_A700"
                            size="xl"
                            variant="fill"
                          ></Button>
                          <Text
                            className="ml-[21px] text-[16.62px] text-gray-900"
                            size="txtPoppinsRegular1662"
                          >
                            2
                          </Text>
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center ml-5 w-[33px]"
                            rightIcon={
                              <Img
                                className="h-2.5 ml-[11px]"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          ></Button>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                        <Img
                          className="h-[174px] md:h-auto object-cover w-[174px]"
                          src="images/img_picture_174x174.png"
                          alt="picture"
                        />
                        <Text
                          className="mt-[21px] text-center text-gray-900 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Linguine
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[5px] w-[57%] md:w-full">
                          <div className="flex flex-row items-center justify-evenly w-full">
                            <RatingBar
                              className="flex justify-between w-[103px]"
                              value={5}
                              starCount={5}
                              activeColor="#f54748"
                              size={15}
                            ></RatingBar>
                          </div>
                        </div>
                        <Text
                          className="mt-[11px] text-center text-gray-800_01 text-xs w-[94%] sm:w-full"
                          size="txtPoppinsRegular12"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat
                        </Text>
                        <Text
                          className="mt-[22px] text-gray-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $12.05
                        </Text>
                        <div className="bg-gray-50_01 flex flex-row items-center justify-center mt-2.5 rounded-[16px] w-[66%] md:w-full">
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                            rightIcon={
                              <div className="ml-[11px] outline-black-900 outline-[0.5px] outline bg-red-500">
                                <Img
                                  src="images/img_vector_25.svg"
                                  alt="Vector 25"
                                />
                              </div>
                            }
                            shape="round"
                            color="white_A700"
                            size="xl"
                            variant="fill"
                          ></Button>
                          <Text
                            className="ml-[21px] text-[16.62px] text-gray-900"
                            size="txtPoppinsRegular1662"
                          >
                            2
                          </Text>
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center ml-5 w-[33px]"
                            rightIcon={
                              <Img
                                className="h-2.5 ml-[11px]"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          ></Button>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                        <Img
                          className="h-[174px] md:h-auto object-cover w-[174px]"
                          src="images/img_picture_174x174.png"
                          alt="picture"
                        />
                        <Text
                          className="mt-[21px] text-center text-gray-900 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Capellini
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[5px] w-[57%] md:w-full">
                          <div className="flex flex-row items-center justify-evenly w-full">
                            <RatingBar
                              className="flex justify-between w-[103px]"
                              value={5}
                              starCount={5}
                              activeColor="#f54748"
                              size={15}
                            ></RatingBar>
                          </div>
                        </div>
                        <Text
                          className="mt-[11px] text-center text-gray-800_01 text-xs w-[94%] sm:w-full"
                          size="txtPoppinsRegular12"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat
                        </Text>
                        <Text
                          className="mt-[22px] text-gray-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $12.05
                        </Text>
                        <div className="bg-gray-50_01 flex flex-row items-center justify-center mt-2.5 rounded-[16px] w-[66%] md:w-full">
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                            rightIcon={
                              <div className="ml-[11px] outline-black-900 outline-[0.5px] outline bg-red-500">
                                <Img
                                  src="images/img_vector_25.svg"
                                  alt="Vector 25"
                                />
                              </div>
                            }
                            shape="round"
                            color="white_A700"
                            size="xl"
                            variant="fill"
                          ></Button>
                          <Text
                            className="ml-[21px] text-[16.62px] text-gray-900"
                            size="txtPoppinsRegular1662"
                          >
                            2
                          </Text>
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center ml-5 w-[33px]"
                            rightIcon={
                              <Img
                                className="h-2.5 ml-[11px]"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          ></Button>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                        <Img
                          className="h-[174px] md:h-auto object-cover w-[174px]"
                          src="images/img_picture_174x174.png"
                          alt="picture"
                        />
                        <Text
                          className="mt-[19px] text-center text-gray-900 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Fettuccine
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[7px] w-[57%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <RatingBar
                                className="flex justify-between w-[103px]"
                                value={5}
                                starCount={5}
                                activeColor="#f54748"
                                size={15}
                              ></RatingBar>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="mt-[11px] text-center text-gray-800_01 text-xs w-[94%] sm:w-full"
                          size="txtPoppinsRegular12"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat
                        </Text>
                        <Text
                          className="mt-[22px] text-gray-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $12.05
                        </Text>
                        <div className="bg-gray-50_01 flex flex-row items-center justify-center mt-2.5 rounded-[16px] w-[66%] md:w-full">
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                            rightIcon={
                              <div className="ml-[11px] outline-black-900 outline-[0.5px] outline bg-red-500">
                                <Img
                                  src="images/img_vector_25.svg"
                                  alt="Vector 25"
                                />
                              </div>
                            }
                            shape="round"
                            color="white_A700"
                            size="xl"
                            variant="fill"
                          ></Button>
                          <Text
                            className="ml-[21px] text-[16.62px] text-gray-900"
                            size="txtPoppinsRegular1662"
                          >
                            0
                          </Text>
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center ml-5 w-[33px]"
                            rightIcon={
                              <div className="h-[33px] pl-[11px] pr-2.5 w-[33px] bg-white-A700 shadow-bs1 rounded-[16px] py-[11px]">
                                <Img
                                  className="h-2.5"
                                  src="images/img_plus.svg"
                                  alt="plus"
                                />
                              </div>
                            }
                            shape="round"
                            color="white_A700"
                            variant="fill"
                          ></Button>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                        <Img
                          className="h-[174px] md:h-auto object-cover w-[174px]"
                          src="images/img_picture_174x174.png"
                          alt="picture"
                        />
                        <Text
                          className="mt-[21px] text-center text-gray-900 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Linguine
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[5px] w-[57%] md:w-full">
                          <div className="flex flex-row items-center justify-evenly w-full">
                            <RatingBar
                              className="flex justify-between w-[103px]"
                              value={5}
                              starCount={5}
                              activeColor="#f54748"
                              size={15}
                            ></RatingBar>
                          </div>
                        </div>
                        <Text
                          className="mt-[11px] text-center text-gray-800_01 text-xs w-[94%] sm:w-full"
                          size="txtPoppinsRegular12"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat
                        </Text>
                        <Text
                          className="mt-[22px] text-gray-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $12.05
                        </Text>
                        <div className="bg-gray-50_01 flex flex-row items-center justify-center mt-2.5 rounded-[16px] w-[66%] md:w-full">
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                            rightIcon={
                              <div className="ml-[11px] outline-black-900 outline-[0.5px] outline bg-red-500">
                                <Img
                                  src="images/img_vector_25.svg"
                                  alt="Vector 25"
                                />
                              </div>
                            }
                            shape="round"
                            color="white_A700"
                            size="xl"
                            variant="fill"
                          ></Button>
                          <Text
                            className="ml-[21px] text-[16.62px] text-gray-900"
                            size="txtPoppinsRegular1662"
                          >
                            0
                          </Text>
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center ml-5 w-[33px]"
                            rightIcon={
                              <Img
                                className="h-2.5 ml-[11px]"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          ></Button>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                        <Img
                          className="h-[174px] md:h-auto object-cover w-[174px]"
                          src="images/img_picture_174x174.png"
                          alt="picture"
                        />
                        <Text
                          className="mt-[21px] text-center text-gray-900 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Capellini
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[5px] w-[57%] md:w-full">
                          <div className="flex flex-row items-center justify-evenly w-full">
                            <RatingBar
                              className="flex justify-between w-[103px]"
                              value={5}
                              starCount={5}
                              activeColor="#f54748"
                              size={15}
                            ></RatingBar>
                          </div>
                        </div>
                        <Text
                          className="mt-[11px] text-center text-gray-800_01 text-xs w-[94%] sm:w-full"
                          size="txtPoppinsRegular12"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat
                        </Text>
                        <Text
                          className="mt-[22px] text-gray-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $12.05
                        </Text>
                        <div className="bg-gray-50_01 flex flex-row items-center justify-center mt-2.5 rounded-[16px] w-[66%] md:w-full">
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                            rightIcon={
                              <div className="ml-[11px] outline-black-900 outline-[0.5px] outline bg-red-500">
                                <Img
                                  src="images/img_vector_25.svg"
                                  alt="Vector 25"
                                />
                              </div>
                            }
                            shape="round"
                            color="white_A700"
                            size="xl"
                            variant="fill"
                          ></Button>
                          <Text
                            className="ml-[21px] text-[16.62px] text-gray-900"
                            size="txtPoppinsRegular1662"
                          >
                            0
                          </Text>
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center ml-5 w-[33px]"
                            rightIcon={
                              <Img
                                className="h-2.5 ml-[11px]"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          ></Button>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                        <Img
                          className="h-[174px] md:h-auto object-cover w-[174px]"
                          src="images/img_picture_174x174.png"
                          alt="picture"
                        />
                        <Text
                          className="mt-[19px] text-center text-gray-900 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Fusilli
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[7px] w-[57%] md:w-full">
                          <div className="flex flex-row items-center justify-evenly w-full">
                            <RatingBar
                              className="flex justify-between w-[103px]"
                              value={5}
                              starCount={5}
                              activeColor="#f54748"
                              size={15}
                            ></RatingBar>
                          </div>
                        </div>
                        <Text
                          className="mt-[11px] text-center text-gray-800_01 text-xs w-[94%] sm:w-full"
                          size="txtPoppinsRegular12"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat
                        </Text>
                        <Text
                          className="mt-[22px] text-gray-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $12.05
                        </Text>
                        <div className="bg-gray-50_01 flex flex-row items-center justify-center mt-2.5 rounded-[16px] w-[66%] md:w-full">
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                            rightIcon={
                              <div className="ml-[11px] outline-black-900 outline-[0.5px] outline bg-red-500">
                                <Img
                                  src="images/img_vector_25.svg"
                                  alt="Vector 25"
                                />
                              </div>
                            }
                            shape="round"
                            color="white_A700"
                            size="xl"
                            variant="fill"
                          ></Button>
                          <Text
                            className="ml-[21px] text-[16.62px] text-gray-900"
                            size="txtPoppinsRegular1662"
                          >
                            0
                          </Text>
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center ml-5 w-[33px]"
                            rightIcon={
                              <Img
                                className="h-2.5 ml-[11px]"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          ></Button>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                        <Img
                          className="h-[174px] md:h-auto object-cover w-[174px]"
                          src="images/img_picture_174x174.png"
                          alt="picture"
                        />
                        <Text
                          className="mt-[19px] text-center text-gray-900 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Farfalle
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[7px] w-[57%] md:w-full">
                          <div className="flex flex-row items-center justify-evenly w-full">
                            <RatingBar
                              className="flex justify-between w-[103px]"
                              value={5}
                              starCount={5}
                              activeColor="#f54748"
                              size={15}
                            ></RatingBar>
                          </div>
                        </div>
                        <Text
                          className="mt-[11px] text-center text-gray-800_01 text-xs w-[94%] sm:w-full"
                          size="txtPoppinsRegular12"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat
                        </Text>
                        <Text
                          className="mt-[22px] text-gray-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $12.05
                        </Text>
                        <div className="bg-gray-50_01 flex flex-row items-center justify-center mt-2.5 rounded-[16px] w-[66%] md:w-full">
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                            rightIcon={
                              <div className="ml-[11px] outline-black-900 outline-[0.5px] outline bg-red-500">
                                <Img
                                  src="images/img_vector_25.svg"
                                  alt="Vector 25"
                                />
                              </div>
                            }
                            shape="round"
                            color="white_A700"
                            size="xl"
                            variant="fill"
                          ></Button>
                          <Text
                            className="ml-[21px] text-[16.62px] text-gray-900"
                            size="txtPoppinsRegular1662"
                          >
                            0
                          </Text>
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center ml-5 w-[33px]"
                            rightIcon={
                              <Img
                                className="h-2.5 ml-[11px]"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          ></Button>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[45px] w-full">
                        <Img
                          className="h-[174px] md:h-auto object-cover w-[174px]"
                          src="images/img_picture_174x174.png"
                          alt="picture"
                        />
                        <Text
                          className="mt-[19px] text-center text-gray-900 text-xl"
                          size="txtPoppinsSemiBold20"
                        >
                          Penne Alla Vodak
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[7px] w-[57%] md:w-full">
                          <div className="flex flex-row items-center justify-evenly w-full">
                            <RatingBar
                              className="flex justify-between w-[103px]"
                              value={5}
                              starCount={5}
                              activeColor="#f54748"
                              size={15}
                            ></RatingBar>
                          </div>
                        </div>
                        <Text
                          className="mt-[11px] text-center text-gray-800_01 text-xs w-[94%] sm:w-full"
                          size="txtPoppinsRegular12"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Egestas consequat
                        </Text>
                        <Text
                          className="mt-[22px] text-gray-900 text-lg"
                          size="txtPoppinsSemiBold18"
                        >
                          $12.05
                        </Text>
                        <div className="bg-gray-50_01 flex flex-row items-center justify-center mt-2.5 rounded-[16px] w-[66%] md:w-full">
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                            rightIcon={
                              <div className="ml-[11px] outline-black-900 outline-[0.5px] outline bg-red-500">
                                <Img
                                  src="images/img_vector_25.svg"
                                  alt="Vector 25"
                                />
                              </div>
                            }
                            shape="round"
                            color="white_A700"
                            size="xl"
                            variant="fill"
                          ></Button>
                          <Text
                            className="ml-[21px] text-[16.62px] text-gray-900"
                            size="txtPoppinsRegular1662"
                          >
                            0
                          </Text>
                          <Button
                            className="cursor-pointer flex h-[33px] items-center justify-center ml-5 w-[33px]"
                            rightIcon={
                              <Img
                                className="h-2.5 ml-[11px]"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          ></Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[60px] md:mt-0 mt-[111px] py-[45px] rounded-[20px] shadow-bs2 w-[31%] md:w-full">
                <div className="flex flex-col gap-[46px] items-center justify-start w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtPoppinsSemiBold30"
                  >
                    Order list
                  </Text>
                  <Line className="bg-blue_gray-100_02 h-px w-full" />
                </div>
                <List
                  className="flex flex-col gap-16 items-center mt-[47px] w-[83%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtPoppinsSemiBold25Black900"
                      >
                        Spaghetti
                      </Text>
                      <div className="flex flex-col h-6 items-center justify-start mt-1 w-6">
                        <Img
                          className="h-6 w-6"
                          src="images/img_thumbsup.svg"
                          alt="thumbsup"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-gray-50_01 flex flex-row items-center justify-between my-0.5 rounded-[16px] w-[42%]">
                        <Button
                          className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                          rightIcon={
                            <div className="ml-[11px] outline-black-900 outline-[0.5px] outline bg-red-500">
                              <Img
                                src="images/img_vector_25.svg"
                                alt="Vector 25"
                              />
                            </div>
                          }
                          shape="round"
                          color="white_A700"
                          size="xl"
                          variant="fill"
                        ></Button>
                        <Text
                          className="text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          2
                        </Text>
                        <Button
                          className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                          rightIcon={
                            <Img
                              className="h-2.5 ml-[11px]"
                              src="images/img_plus.svg"
                              alt="plus"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        ></Button>
                      </div>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtPoppinsMedium25"
                      >
                        $24.1
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtPoppinsSemiBold25Black900"
                      >
                        Linguine
                      </Text>
                      <div className="flex flex-col h-6 items-center justify-start mt-1 w-6">
                        <Img
                          className="h-6 w-6"
                          src="images/img_thumbsup.svg"
                          alt="thumbsup"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-gray-50_01 flex flex-row items-center justify-between my-0.5 rounded-[16px] w-[42%]">
                        <Button
                          className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                          rightIcon={
                            <div className="ml-[11px] outline-black-900 outline-[0.5px] outline bg-red-500">
                              <Img
                                src="images/img_vector_25.svg"
                                alt="Vector 25"
                              />
                            </div>
                          }
                          shape="round"
                          color="white_A700"
                          size="xl"
                          variant="fill"
                        ></Button>
                        <Text
                          className="text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          2
                        </Text>
                        <Button
                          className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                          rightIcon={
                            <Img
                              className="h-2.5 ml-[11px]"
                              src="images/img_plus.svg"
                              alt="plus"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        ></Button>
                      </div>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtPoppinsMedium25"
                      >
                        $35.7
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtPoppinsSemiBold25Black900"
                      >
                        Capellini
                      </Text>
                      <div className="flex flex-col h-6 items-center justify-start mt-1 w-6">
                        <Img
                          className="h-6 w-6"
                          src="images/img_thumbsup.svg"
                          alt="thumbsup"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-gray-50_01 flex flex-row items-center justify-between my-0.5 rounded-[16px] w-[42%]">
                        <Button
                          className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                          rightIcon={
                            <div className="ml-[11px] outline-black-900 outline-[0.5px] outline bg-red-500">
                              <Img
                                src="images/img_vector_25.svg"
                                alt="Vector 25"
                              />
                            </div>
                          }
                          shape="round"
                          color="white_A700"
                          size="xl"
                          variant="fill"
                        ></Button>
                        <Text
                          className="text-[16.62px] text-gray-900"
                          size="txtPoppinsRegular1662"
                        >
                          2
                        </Text>
                        <Button
                          className="cursor-pointer flex h-[33px] items-center justify-center w-[33px]"
                          rightIcon={
                            <Img
                              className="h-2.5 ml-[11px]"
                              src="images/img_plus.svg"
                              alt="plus"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        ></Button>
                      </div>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                        size="txtPoppinsMedium25"
                      >
                        $18.5
                      </Text>
                    </div>
                  </div>
                </List>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[168px] items-center justify-start mt-[54px] p-6 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group7767.svg')" }}
                >
                  <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtPoppinsSemiBold25Black900"
                      >
                        Voucher Code
                      </Text>
                      <div className="flex flex-row gap-[22px] items-center justify-between w-full">
                        <Input
                          name="group7722"
                          placeholder="FREETOEAT"
                          className="leading-[normal] p-0 placeholder:text-light_blue-800 text-left text-xl w-full"
                          wrapClassName="rounded-[15px]"
                          color="gray_50_01"
                        ></Input>
                        <Button
                          className="cursor-pointer flex h-[60px] items-center justify-center rounded-[15px] w-[60px]"
                          rightIcon={
                            <Img
                              className="h-5 ml-5"
                              src="images/img_plus_white_a700.svg"
                              alt="plus"
                            />
                          }
                          shape="round"
                          color="blue_400"
                          size="3xl"
                          variant="fill"
                        ></Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[26px] items-center justify-start mt-11 w-[83%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsSemiBold25Black900"
                    >
                      Subtotal
                    </Text>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtPoppinsMedium25"
                    >
                      $78.3
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsSemiBold25Black900"
                    >
                      Tax fee
                    </Text>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtPoppinsMedium25"
                    >
                      $3.5
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsSemiBold25Black900"
                    >
                      Voucher
                    </Text>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtPoppinsMedium25"
                    >
                      $5.0
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsSemiBold25Black900"
                    >
                      Total
                    </Text>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtPoppinsMedium25"
                    >
                      $76.8
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold mb-1 min-w-[283px] mt-[65px] rounded-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                  shape="round"
                  color="red_400"
                  size="xs"
                  variant="fill"
                >
                  Checkout
                </Button>
              </div>
            </div>
            <div className="flex flex-row font-inter gap-2.5 items-center justify-start md:ml-[0] ml-[242px] mt-[50px] pr-5 w-[22%] md:w-full">
              <Img
                className="h-[15px] w-[15px]"
                src="images/img_arrowleft_black_900.svg"
                alt="arrowleft"
              />
              <div className="flex flex-row gap-2.5 items-center justify-start w-[78%]">
                <Button
                  className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                  color="gray_900"
                  size="xs"
                  variant="fill"
                >
                  1
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                  color="gray_200"
                  size="xs"
                  variant="fill"
                >
                  2
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                  color="gray_200"
                  size="xs"
                  variant="fill"
                >
                  3
                </Button>
                <Button
                  className="flex h-[35px] items-center justify-center rounded w-[35px]"
                  color="gray_200"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-5"
                    src="images/img_bxbxdotshorizontalrounded.svg"
                    alt="bxbxdotshorizon"
                  />
                </Button>
              </div>
              <Img
                className="h-[15px] w-[15px]"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </div>
          <Footer className="bg-gray-900_01 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default OrderonlinePage;
