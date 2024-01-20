import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold1623: "font-poppins font-semibold",
  txtPoppinsRegular20Black900: "font-normal font-poppins",
  txtInterRegular40: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtPoppinsRegular20Gray30001: "font-normal font-poppins",
  txtOpenSansRegular16Red400: "font-normal font-opensans",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtPoppinsRegular20Gray80001: "font-normal font-poppins",
  txtPoppinsRegular1662: "font-normal font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtOpenSansBold80: "font-bold font-opensans",
  txtTinosBold52: "font-bold font-tinos",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtInterRegular25: "font-inter font-normal",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtOpenSansBold70Gray900: "font-bold font-opensans",
  txtInterRegular30: "font-inter font-normal",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsSemiBold25Black900: "font-poppins font-semibold",
  txtInterRegular20Gray30001: "font-inter font-normal",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtTinosBold52Gray900: "font-bold font-tinos",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtOpenSansBold36: "font-bold font-opensans",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular1299: "font-normal font-poppins",
  txtOpenSansRegular16Gray900cc: "font-normal font-opensans",
  txtPoppinsRegular25Gray50001: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsRegular20Gray300: "font-normal font-poppins",
  txtOpenSansBold52: "font-bold font-opensans",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtPoppinsMedium25: "font-medium font-poppins",
  txtTinosBold80: "font-bold font-tinos",
  txtPoppinsRegular20Gray500: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtOpenSansBold70: "font-bold font-opensans",
  txtPoppinsSemiBold25Red400: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular16Gray500: "font-normal font-poppins",
  txtInterRegular20Gray300: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
