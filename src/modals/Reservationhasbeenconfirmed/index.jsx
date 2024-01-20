import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const ReservationhasbeenconfirmedModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[78%]"
      overlayClassName="bg-gray-900_a2_01 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1112px] mx-auto my-[76px] md:px-5 py-[34px] rounded-[16px] w-full">
          <div className="flex flex-col justify-start mb-[29px] w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[448px] w-[55%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900"
                size="txtOpenSansBold36"
              >
                Reservation
              </Text>
              <Img
                className="common-pointer h-6 w-6"
                src="images/img_close.svg"
                alt="close"
                onClick={props.onRequestClose}
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col font-poppins h-[232px] items-start justify-start mt-11 p-[34px] sm:px-5 w-full"
              style={{
                backgroundImage: "url('images/img_reservationhas.png')",
              }}
            >
              <div className="flex flex-col items-start justify-start mb-[7px] md:ml-[0] ml-[29px] w-[64%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtPoppinsSemiBold40"
                >
                  Reservation has been confirmed
                </Text>
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start mt-[21px] w-[85%] md:w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtPoppinsRegular20WhiteA700"
                  >
                    The confirmation result has been sent to your email
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start mt-2.5 w-[38%] md:w-full">
                  <Img
                    className="h-[30px] mb-0.5 w-[30px]"
                    src="images/img_bag.svg"
                    alt="bag"
                  />
                  <Text
                    className="mt-0.5 text-white-A700 text-xl"
                    size="txtPoppinsRegular20WhiteA700"
                  >
                    Booking ID : #123456
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-start md:ml-[0] ml-[34px] mt-12 w-[95%] md:w-full">
              <div className="md:h-[329px] h-[330px] relative w-[330px]">
                <div className="bg-deep_orange-200_63 flex flex-col h-full items-center justify-start m-auto p-8 sm:px-5 rounded-[50%] w-[330px]">
                  <div className="bg-deep_orange-200_6c h-[265px] rounded-[132px] w-[265px]"></div>
                </div>
                <Img
                  className="absolute h-[210px] inset-[0] justify-center m-auto rounded-[50%] w-[210px]"
                  src="images/img_unsplash.png"
                  alt="unsplash"
                />
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[34px] w-[31%] md:w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                  size="txtPoppinsSemiBold25"
                >
                  Reservation detail
                </Text>
                <div className="flex flex-row gap-5 items-start justify-start mt-[30px] w-full">
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
                <div className="flex flex-row gap-5 items-start justify-start mt-5 w-[46%] md:w-full">
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
                <div className="flex flex-row gap-5 items-center justify-start mt-[19px] w-full">
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
              <div className="flex flex-col gap-5 items-center justify-start ml-28 md:ml-[0] w-[24%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[246px] px-[35px] py-[23px] rounded-[20px]"
                  rightIcon={
                    <Img
                      className="h-[34px] ml-[25px]"
                      src="images/img_edit.svg"
                      alt="edit"
                    />
                  }
                  color="light_blue_A700_6c"
                  variant="fill"
                >
                  <div className="sm:px-5 text-left text-xl">Modify</div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[246px] px-[35px] py-[23px] rounded-[20px]"
                  rightIcon={
                    <Img
                      className="h-[34px] ml-5"
                      src="images/img_close_red_a700_01.svg"
                      alt="close"
                    />
                  }
                  color="red_A700_63"
                  variant="fill"
                >
                  <div className="sm:px-5 text-left text-xl">Cancel</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ReservationhasbeenconfirmedModal;
