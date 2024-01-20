import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, SelectBox, Text, TextArea } from "components";

const selectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectanaccasioOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EnterDetailsReservationModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[78%]"
      overlayClassName="bg-gray-900_a2_01 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1112px] mx-auto my-[76px] p-10 md:px-5 rounded-[16px] w-full">
          <div className="flex flex-col gap-[27px] items-end justify-start mb-5 w-[97%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[61%] md:w-full">
              <Text
                className="mt-4 text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900"
                size="txtOpenSansBold36"
              >
                Reservation
              </Text>
              <Img
                className="common-pointer h-5 w-5"
                src="images/img_close.svg"
                alt="close"
                onClick={props.onRequestClose}
              />
            </div>
            <div className="flex flex-col font-poppins gap-[47px] items-center justify-start w-full">
              <Text
                className="bg-light_blue-A100_7e h-16 justify-center max-w-[992px] md:max-w-full pb-[15px] pt-[18px] sm:px-5 px-[35px] rounded-[20px] text-black-900 text-xl w-full"
                size="txtPoppinsRegular20Black900"
              >
                <span className="text-gray-800_01 font-inter text-left font-normal">
                  Due to limited availability, we can hold this table for you
                  for
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  {" "}
                </span>
                <span className="text-gray-900 font-poppins text-left font-semibold">
                  5:00 minutes
                </span>
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[48%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtPoppinsSemiBold25Black900"
                  >
                    Data order
                  </Text>
                  <div className="flex flex-col gap-6 items-center justify-start mt-[17px] w-full">
                    <Input
                      name="firstname"
                      placeholder="First name"
                      className="p-0 placeholder:text-gray-500 text-left text-xl w-full"
                      wrapClassName="border border-gray-400 border-solid w-full"
                      type="text"
                      shape="round"
                      size="xs"
                    ></Input>
                    <Input
                      name="lastname"
                      placeholder="Last name"
                      className="p-0 placeholder:text-gray-500 text-left text-xl w-full"
                      wrapClassName="border border-gray-400 border-solid w-full"
                      type="text"
                      shape="round"
                      size="xs"
                    ></Input>
                    <div className="bg-white-A700 border border-gray-400 border-solid flex flex-row gap-4 items-center justify-start p-2.5 rounded-lg w-full">
                      <SelectBox
                        className="sm:flex-1 ml-[5px] w-[11%] sm:w-full"
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
                        className="text-gray-500 text-xl"
                        size="txtPoppinsRegular20Gray500"
                      >
                        Phone number
                      </Text>
                    </div>
                    <Input
                      name="emailaddress"
                      placeholder="Email address"
                      className="p-0 placeholder:text-gray-500 text-left text-xl w-full"
                      wrapClassName="border border-gray-400 border-solid w-full"
                      type="email"
                      shape="round"
                      size="xs"
                    ></Input>
                    <SelectBox
                      className="border border-gray-400 border-solid rounded-lg text-left text-xl w-full"
                      placeholderClassName="text-gray-500"
                      indicator={
                        <Img
                          className="h-6 mr-[0] outline-black-900 outline-[0.5px] outline w-6"
                          src="images/img_arrowdown_gray_800_01.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="selectanaccasio"
                      options={selectanaccasioOptionsList}
                      isSearchable={false}
                      placeholder="Select an occasion"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    />
                    <TextArea
                      className="bg-white-A700 border border-gray-400 border-solid pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-[13px] rounded-lg placeholder:text-gray-500 text-gray-500 text-left text-xl w-full"
                      name="addaspecialrequ_One"
                      placeholder="Add a special request"
                    ></TextArea>
                  </div>
                  <Button
                    className="cursor-pointer min-w-[475px] sm:min-w-full mt-6 rounded-lg sm:text-[21px] md:text-[23px] text-[25px] text-center"
                    color="red_400"
                    size="xs"
                    variant="fill"
                  >
                    Confirm reservation
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col gap-[49px] items-center justify-start w-[44%] md:w-full">
                  <div className="bg-blue_gray-100_63 flex flex-col items-start justify-start p-[34px] sm:px-5 rounded-[20px] w-full">
                    <Text
                      className="md:ml-[0] ml-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtPoppinsSemiBold25"
                    >
                      Reservation detail
                    </Text>
                    <div className="flex flex-row gap-9 items-start justify-start mt-10 w-[94%] md:w-full">
                      <Img
                        className="h-[34px] w-[34px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="mt-[3px] text-gray-800_01 text-xl"
                        size="txtPoppinsRegular20Gray80001"
                      >
                        Saturday, 28 february 2022
                      </Text>
                    </div>
                    <div className="flex flex-row gap-9 items-start justify-start mt-[25px] w-[46%] md:w-full">
                      <Img
                        className="h-[34px] w-[34px]"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="mt-1 text-gray-800_01 text-xl"
                        size="txtPoppinsRegular20Gray80001"
                      >
                        04:30 pm
                      </Text>
                    </div>
                    <div className="flex flex-row gap-9 items-center justify-start mt-6 w-[95%] md:w-full">
                      <Img
                        className="h-[34px] w-[34px]"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                      <Text
                        className="text-gray-800_01 text-xl"
                        size="txtPoppinsRegular20Gray80001"
                      >
                        2 people (Standar seating)
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-10 items-start justify-start">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                      size="txtPoppinsSemiBold25Black900"
                    >
                      Restaurant informations
                    </Text>
                    <Text
                      className="text-gray-800_01 text-xl w-full"
                      size="txtPoppinsRegular20Gray80001"
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default EnterDetailsReservationModal;
