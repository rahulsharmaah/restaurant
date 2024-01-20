import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  Radio,
  RadioGroup,
  SelectBox,
  Text,
  TextArea,
} from "components";
import Footer from "components/Footer";

const selectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CheckoutPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-full">
          <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1112px] mx-auto md:px-5 w-full">
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
            <div className="flex md:flex-col flex-row font-opensans md:gap-10 gap-[99px] items-start justify-start w-[87%] md:w-full">
              <Button
                className="flex h-[50px] items-center justify-center mb-[843px] w-[50px]"
                shape="circle"
                color="gray_900"
                size="lg"
                variant="fill"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrowleft"
                />
              </Button>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[893px] items-center justify-start p-[45px] md:px-10 sm:px-5 w-[85%] md:w-full"
                style={{ backgroundImage: "url('images/img_group120.svg')" }}
              >
                <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900"
                    size="txtOpenSansBold36"
                  >
                    Checkout
                  </Text>
                  <div className="flex flex-col font-poppins items-center justify-start w-[722px] md:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Shipping address
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                        <Input
                          name="subject"
                          placeholder="1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat"
                          className="!placeholder:text-gray-900 !text-gray-900 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-400 border-solid sm:flex-1 sm:w-full"
                          shape="round"
                        ></Input>
                        <Button
                          className="cursor-pointer min-w-[166px] rounded-lg text-center text-lg"
                          color="indigo_300"
                          size="lg"
                          variant="fill"
                        >
                          Change
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[11px] items-start justify-start mt-[27px] w-full">
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Order data
                      </Text>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-6 items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                            <Text
                              className="bg-white-A700 border border-gray-400 border-solid h-[52px] justify-center pb-[15px] pl-[23px] pr-[35px] pt-3 sm:px-5 rounded-lg text-base text-gray-500 w-[353px]"
                              size="txtPoppinsRegular16Gray500"
                            >
                              First name
                            </Text>
                            <Text
                              className="bg-white-A700 border border-gray-400 border-solid h-[52px] justify-center pl-[23px] pr-[35px] sm:px-5 py-[13px] rounded-lg text-base text-gray-500 w-[353px]"
                              size="txtPoppinsRegular16Gray500"
                            >
                              Last name
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-row gap-4 items-start justify-start p-3 rounded-lg">
                              <SelectBox
                                className="mb-0.5 ml-1 w-[15%] sm:w-full"
                                indicator={
                                  <Img
                                    className="h-3 mr-[0] outline-black-900 outline-[0.5px] outline w-3"
                                    src="images/img_arrowdown_gray_900.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="groupNinetyFour"
                                isSearchable={false}
                                options={selectOptionsList}
                                size="xs"
                              />
                              <Text
                                className="text-base text-gray-500"
                                size="txtPoppinsRegular16Gray500"
                              >
                                Phone number
                              </Text>
                            </div>
                            <Input
                              name="emailaddress_Two"
                              placeholder="Email address"
                              className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                              wrapClassName="border border-gray-400 border-solid md:flex-1 md:w-full"
                              type="email"
                              shape="round"
                            ></Input>
                          </div>
                          <TextArea
                            className="bg-white-A700 border border-gray-400 border-solid leading-[normal] pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-[18px] rounded-lg text-base placeholder:text-gray-500 text-gray-500 text-left w-full"
                            name="massage"
                            placeholder="Message"
                          ></TextArea>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start mt-[30px] w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-900 text-lg"
                          size="txtPoppinsMedium18"
                        >
                          Payment method
                        </Text>
                      </div>
                      <RadioGroup
                        className="flex flex-col w-full"
                        name="paymentmethod"
                      >
                        <RadioGroup
                          className="flex flex-1 w-full"
                          name="radiogroupcashondelivery"
                        >
                          <Radio
                            value="CashOnDelivery"
                            className="leading-[normal] sm:pr-5 text-gray-900 text-left text-lg"
                            inputClassName="bg-blue_gray-100_63 mr-[5px] rounded-lg"
                            checked={false}
                            name="radiogroupcashondelivery"
                            label="Cash On Delivery"
                            id="CashOnDelivery"
                          ></Radio>
                          <Radio
                            value="BCAVirtualAccount"
                            className="leading-[normal] ml-4 sm:pr-5 text-gray-900 text-left text-lg"
                            inputClassName="bg-blue_gray-100_63 mr-[5px] rounded-lg"
                            checked={false}
                            name="radiogroupcashondelivery"
                            label="BCA Virtual Account"
                            id="BCAVirtualAccount"
                          ></Radio>
                        </RadioGroup>
                        <RadioGroup
                          className="flex flex-1 mt-6 w-full"
                          name="radiogroupcreditcard"
                        >
                          <Radio
                            value="CreditCard"
                            className="leading-[normal] sm:pr-5 text-gray-900 text-left text-lg"
                            inputClassName="bg-blue_gray-100_63 mr-[5px] rounded-lg"
                            checked={false}
                            name="radiogroupcreditcard"
                            label="Credit Card"
                            id="CreditCard"
                          ></Radio>
                          <Radio
                            value="TransferBank"
                            className="leading-[normal] ml-4 sm:pr-5 text-gray-900 text-left text-lg"
                            inputClassName="bg-blue_gray-100_63 mr-[5px] rounded-lg"
                            checked={false}
                            name="radiogroupcreditcard"
                            label="Transfer Bank"
                            id="TransferBank"
                          ></Radio>
                        </RadioGroup>
                      </RadioGroup>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[722px] md:min-w-full mt-8 rounded-[12px] text-center text-xl"
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
          <Footer className="bg-gray-900_01 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
