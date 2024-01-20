import React from "react";

import { Button, Img, Line, RatingBar, Slider, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const HomepageOnePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-gradient  flex flex-col md:gap-10 gap-[70px] items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[76px] items-center justify-start max-w-[1240px] mb-5 mx-auto w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
              <div className="flex flex-col gap-9 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="md:text-5xl text-[70px] text-gray-900_02"
                    size="txtOpenSansBold70"
                  >
                    <span className="text-gray-900_02 font-opensans text-left font-bold">
                      <>
                        Best Restaurant
                        <br />
                        In{" "}
                      </>
                    </span>
                    <span className="text-red-400 font-inter text-left font-normal">
                      Town.
                    </span>
                  </Text>
                  <Text
                    className="leading-[40.00px] text-gray-800_02 text-xl w-[91%] sm:w-full"
                    size="txtPoppinsRegular20"
                  >
                    We provide best food in town, we provide home delivery and
                    dine in services.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-[85%] md:w-full">
                  <Button
                    className="cursor-pointer font-semibold min-w-[232px] py-[22px] text-center text-xl"
                    shape="round"
                    color="red_400"
                    variant="fill"
                  >
                    Order now
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold min-w-[232px] py-[22px] text-center text-xl"
                    shape="round"
                    color="red_400_19"
                    variant="fill"
                  >
                    Reservation
                  </Button>
                </div>
              </div>
            </div>
            <Img
              className="md:flex-1 h-[502px] sm:h-auto object-cover w-[48%] md:w-full"
              src="images/img_illustration_502x587.png"
              alt="illustration"
            />
          </div>
        </div>
        <div className="bg-green-50 flex md:flex-col flex-row gap-[13px] items-start justify-start mt-[139px] p-3.5 w-full">
          <div className="md:h-[556px] h-[646px] md:ml-[0] ml-[149px] md:px-5 relative w-[48%] md:w-full">
            <Img
              className="absolute h-[556px] inset-y-[0] left-[4%] my-auto object-cover w-[85%]"
              src="images/img_kindpng3443995.png"
              alt="kindpng3443995"
            />
            <Img
              className="absolute bottom-[7%] h-[184px] left-[0] object-cover w-[29%]"
              src="images/img_kisspngleafpe.png"
              alt="kisspngleafpe"
            />
            <Img
              className="absolute bottom-[0] h-[119px] left-[39%] object-cover w-[17%]"
              src="images/img_kisspngleafpe_119x113.png"
              alt="kisspngleafpe_One"
            />
            <Img
              className="absolute h-[163px] object-cover right-[0] top-[0] w-1/4"
              src="images/img_kisspngleafpe_163x160.png"
              alt="kisspngleafpe_Two"
            />
          </div>
          <div className="flex md:flex-1 flex-col gap-[35px] items-start justify-start md:mt-0 mt-[91px] md:px-5 w-[31%] md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="leading-[57.00px] sm:text-[38px] md:text-[44px] text-[52px] text-red-400"
                size="txtTinosBold52"
              >
                <span className="text-gray-900_02 font-opensans text-left font-bold leading-[normal]">
                  <>
                    Our Most <br />
                    Popular{" "}
                  </>
                </span>
                <span className="text-red-400 font-opensans text-left font-bold leading-[normal]">
                  Dish.
                </span>
              </Text>
              <Text
                className="leading-[40.00px] text-gray-800_01 text-xl w-full"
                size="txtPoppinsRegular20Gray80001"
              >
                This dish is full of flavor and nutrition! Quinoa is a complete
                protein, providing all the essential amino acids your body
                needs, and is also a good source of fiber.
              </Text>
            </div>
            <Button
              className="cursor-pointer font-semibold min-w-[232px] py-[22px] text-center text-xl"
              shape="round"
              color="red_400"
              variant="fill"
            >
              Order now
            </Button>
          </div>
        </div>
        <div className="flex flex-col font-opensans md:gap-10 gap-[70px] items-center justify-start max-w-[1112px] mt-[123px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[38px] md:text-[44px] text-[52px] text-center text-gray-900"
            size="txtOpenSansBold52"
          >
            Our Popular Menu
          </Text>
          <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-7 items-center justify-between w-full">
              <Button
                className="cursor-pointer font-semibold min-w-[232px] py-[22px] text-center text-xl"
                shape="round"
                color="red_400"
                variant="fill"
              >
                All catagory
              </Button>
              <Button
                className="cursor-pointer min-w-[192px] py-[22px] text-center text-xl"
                shape="round"
                color="gray_400_63"
                variant="fill"
              >
                Dinner
              </Button>
              <Button
                className="cursor-pointer min-w-[192px] py-[22px] text-center text-xl"
                shape="round"
                color="gray_400_63"
                variant="fill"
              >
                Lunch
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
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col gap-[34px] items-center justify-start p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngitem41084.png"
                        alt="pngitem41084"
                      />
                      <div className="flex flex-col items-center justify-start mb-1.5 w-full">
                        <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Spaghetti
                          </Text>
                          <Text
                            className="leading-[28.00px] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-[13px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                            color="red_400"
                            size="lg"
                            variant="fill"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-[30px] items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngitem1447549.png"
                        alt="pngitem1447549"
                      />
                      <div className="flex flex-col items-center justify-start mb-1.5 w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Gnocchi
                          </Text>
                          <Text
                            className="leading-[28.00px] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-[13px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                            color="red_400"
                            size="lg"
                            variant="fill"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-[30px] items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngegg.png"
                        alt="pngegg"
                      />
                      <div className="flex flex-col items-center justify-start mb-1.5 w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Rovioli
                          </Text>
                          <Text
                            className="leading-[28.00px] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-[13px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                            color="red_400"
                            size="lg"
                            variant="fill"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-[31px] items-center justify-start p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[95%]"
                        src="images/img_pngwing.png"
                        alt="pngwing"
                      />
                      <div className="flex flex-col items-center justify-start mb-1.5 w-full">
                        <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Penne Alla Vodak
                          </Text>
                          <Text
                            className="leading-[28.00px] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-[13px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                            color="red_400"
                            size="lg"
                            variant="fill"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-[30px] items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngitem5290903.png"
                        alt="pngitem5290903"
                      />
                      <div className="flex flex-col items-center justify-start mb-1.5 w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Risoto
                          </Text>
                          <Text
                            className="leading-[28.00px] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-[13px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                            color="red_400"
                            size="lg"
                            variant="fill"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-[34px] items-center justify-start p-[30px] sm:px-5 rounded-[40px] w-full">
                      <Img
                        className="h-[270px] md:h-auto mt-1.5 object-cover w-[270px]"
                        src="images/img_pngwing_270x270.png"
                        alt="pngwing"
                      />
                      <div className="flex flex-col items-center justify-start mb-1.5 w-full">
                        <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900"
                            size="txtPoppinsSemiBold30"
                          >
                            Splitza Signature
                          </Text>
                          <Text
                            className="leading-[28.00px] text-center text-gray-800 text-sm w-full"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-center mt-[13px] w-[49%] md:w-full">
                          <RatingBar
                            className="flex justify-between w-[140px]"
                            value={5}
                            starCount={5}
                            activeColor="#f54748"
                            size={24}
                          ></RatingBar>
                        </div>
                        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] w-[95%] md:w-full">
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsSemiBold25"
                          >
                            $12.05
                          </Text>
                          <Button
                            className="cursor-pointer font-semibold min-w-[158px] rounded-lg text-base text-center"
                            color="red_400"
                            size="lg"
                            variant="fill"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row font-inter gap-2.5 items-center justify-center pr-5 w-[22%] md:w-full">
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
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1112px] mt-[146px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-center text-gray-900"
              size="txtOpenSansBold52"
            >
              Our Popular Chef
            </Text>
            <div className="font-poppins gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[53px] w-full">
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-gray-900_6c flex flex-col items-center justify-start rounded-[50px] w-full">
                  <Img
                    className="h-[549px] md:h-auto object-cover rounded-[50px] w-full"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                </div>
                <Text
                  className="mt-[46px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                  size="txtPoppinsSemiBold25"
                >
                  Betran Komar
                </Text>
                <Text
                  className="mt-[41px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-500_01"
                  size="txtPoppinsRegular25Gray50001"
                >
                  Head chef
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-gradient1  flex flex-col items-center justify-end pt-2 rounded-[50px] w-full">
                    <Img
                      className="h-[541px] md:h-auto object-cover rounded-[50px] w-full"
                      src="images/img_image3.png"
                      alt="imageThree"
                    />
                  </div>
                </div>
                <Text
                  className="mt-12 sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                  size="txtPoppinsSemiBold25"
                >
                  Ferry Sauwi
                </Text>
                <Text
                  className="mt-[39px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-500_01"
                  size="txtPoppinsRegular25Gray50001"
                >
                  Chef
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-lime-900_6c flex flex-col items-center justify-start rounded-[50px] w-full">
                  <Img
                    className="h-[549px] md:h-auto object-cover rounded-[50px] w-full"
                    src="images/img_image2.png"
                    alt="imageTwo"
                  />
                </div>
                <Text
                  className="mt-[45px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                  size="txtPoppinsSemiBold25"
                >
                  Iswan Dracho
                </Text>
                <Text
                  className="mt-[41px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-500_01"
                  size="txtPoppinsRegular25Gray50001"
                >
                  Chef
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-poppins font-semibold min-w-[235px] mt-[89px] py-[22px] text-center text-xl"
              shape="round"
              color="red_400"
              variant="fill"
            >
              View all
            </Button>
          </div>
        </div>
        <div className="flex flex-col font-opensans gap-[43px] items-center justify-start mt-[126px] md:px-5 w-[55%] md:w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-center text-gray-900"
              size="txtOpenSansBold52"
            >
              What Our Customers Say
            </Text>
          </div>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 2 },
              1050: { items: 3 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[1.00]"
            ref={sliderRef}
            className="font-poppins w-full"
            items={[...Array(9)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="bg-white-A700 flex flex-col gap-4 items-center justify-start mx-2.5 p-[50px] md:px-10 sm:px-5 rounded-[16px]">
                  <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[198px] items-center justify-end p-8 sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group7731.svg')",
                      }}
                    >
                      <Text
                        className="leading-[40.00px] mt-3.5 text-center text-gray-800_01 text-xl w-[97%] sm:w-full"
                        size="txtPoppinsRegular20Gray80001"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Facilisis ultricies at eleifend proin. Congue nibh nulla
                        malesuada ultricies nec quam{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-end justify-center w-[43%] md:w-full">
                    <Img
                      className="h-20 md:h-auto rounded-[50%] w-20"
                      src="images/img_ellipse28.png"
                      alt="ellipseTwentyEight"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start mb-1 mt-[7px]">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                        size="txtPoppinsSemiBold24"
                      >
                        Starla Virgoun
                      </Text>
                      <Text
                        className="text-base text-center text-gray-800_01"
                        size="txtPoppinsRegular16"
                      >
                        Financial advisor
                      </Text>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          />
        </div>
        <div className="bg-red-100 flex flex-col font-opensans items-center justify-end max-w-[1112px] mt-[120px] mx-auto p-[93px] md:px-5 rounded-[24px] w-full">
          <div className="flex flex-col gap-10 items-center justify-start mt-[7px] w-[77%] md:w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-center text-gray-900"
              size="txtOpenSansBold52"
            >
              Hungry? We are open now..
            </Text>
            <div className="flex sm:flex-col flex-row font-poppins gap-6 items-center justify-center w-[70%] md:w-full">
              <Button
                className="cursor-pointer font-semibold min-w-[232px] py-[22px] text-center text-xl"
                shape="round"
                color="red_400"
                variant="fill"
              >
                Order now
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[232px] py-[22px] text-center text-xl"
                shape="round"
                color="white_A700_7f"
                variant="fill"
              >
                Reservation
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900_01 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomepageOnePage;
