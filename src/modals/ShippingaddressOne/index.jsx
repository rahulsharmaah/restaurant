import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Text } from "components";

const ShippingaddressOneModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[59%]"
      overlayClassName="bg-gray-900_a2_01 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-[30px] items-end justify-start mb-[511px] p-[47px] md:px-5 rounded-[16px] w-full">
          <div className="flex flex-row items-center justify-between w-[66%] md:w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtPoppinsMedium30"
            >
              Shipping address
            </Text>
            <Img
              className="common-pointer h-5 w-5"
              src="images/img_close.svg"
              alt="close"
              onClick={props.onRequestClose}
            />
          </div>
          <div className="flex flex-col gap-[52px] items-center justify-start mb-3 mr-3 w-[97%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text className="text-gray-900 text-lg" size="txtPoppinsMedium18">
                Shipping address
              </Text>
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between mt-2 w-full">
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
                  Search
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start mt-[17px] w-[37%] md:w-full">
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_maximize.svg"
                    alt="maximize"
                  />
                  <Text
                    className="text-indigo-300 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    Use your current location
                  </Text>
                </div>
              </div>
            </div>
            <div className="h-[481px] relative w-full">
              <Img
                className="h-[481px] m-auto object-cover rounded-[16px] w-full"
                src="images/img_mapmapview.png"
                alt="mapmapview"
              />
              <div className="absolute bottom-[19%] flex flex-col gap-[13px] inset-x-[0] items-center justify-start mx-auto w-[53%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[221px] items-center justify-start p-3 w-full"
                  style={{ backgroundImage: "url('images/img_direction.svg')" }}
                >
                  <div className="flex flex-row gap-3.5 items-center justify-between mb-[25px] mt-[5px] w-[99%] md:w-full">
                    <Img
                      className="h-[165px] md:h-auto object-cover"
                      src="images/img_1.png"
                      alt="One"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[16.23px] text-gray-900"
                          size="txtPoppinsSemiBold1623"
                        >
                          Highbridge House
                        </Text>
                        <Text
                          className="leading-[19.00px] mt-1 text-[12.99px] text-gray-900 w-full"
                          size="txtPoppinsRegular1299"
                        >
                          1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat
                        </Text>
                        <Text
                          className="mt-1.5 text-[12.99px] text-gray-900"
                          size="txtPoppinsRegular1299"
                        >
                          40.885147,-73.9220459
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-semibold min-w-[185px] rounded-[9px] text-[12.99px] text-center"
                        color="red_500"
                        size="lg"
                        variant="fill"
                      >
                        Confirmation
                      </Button>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[38px]"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ShippingaddressOneModal;
