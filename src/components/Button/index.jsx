import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[16px]" };
const variants = {
  fill: {
    red_400_19: "bg-red-400_19 text-red-400",
    white_A700: "bg-white-A700 shadow-bs",
    white_A700_7f: "bg-white-A700_7f text-red-400",
    red_500: "bg-red-500 text-white-A700",
    light_blue_A700_6c: "bg-light_blue-A700_6c text-indigo-900",
    red_A700_63: "bg-red-A700_63 text-red-A700",
    blue_400: "bg-blue-400",
    gray_400_63_01: "bg-gray-400_63_01 text-gray-900",
    gray_300_01: "bg-gray-300_01",
    indigo_300: "bg-indigo-300 text-white-A700",
    blue_gray_100: "bg-blue_gray-100",
    gray_900: "bg-gray-900 text-white-A700",
    gray_200: "bg-gray-200 text-black-900",
    gray_400_63: "bg-gray-400_63 text-gray-900",
    red_400: "bg-red-400 text-white-A700",
  },
};
const sizes = {
  xs: "p-[9px]",
  sm: "pr-2.5 py-[11px]",
  md: "pr-[13px] py-[13px]",
  lg: "p-3.5",
  xl: "pr-[9px] py-[15px]",
  "2xl": "p-[18px]",
  "3xl": "pr-5 py-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "red_400_19",
    "white_A700",
    "white_A700_7f",
    "red_500",
    "light_blue_A700_6c",
    "red_A700_63",
    "blue_400",
    "gray_400_63_01",
    "gray_300_01",
    "indigo_300",
    "blue_gray_100",
    "gray_900",
    "gray_200",
    "gray_400_63",
    "red_400",
  ]),
};

export { Button };
