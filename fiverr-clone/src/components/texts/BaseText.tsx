import React from "react";

const BaseText = ({
  children,
  color,
  weight,
}: {
  children: React.ReactNode;
  color: "dark" | "light";
  weight: "base" | "semiBold" | "bold";
}) => {
  return (
    <p
      className={`base-text-cp ${color === "dark" && "dark-text-cp"} ${
        color === "light" && "light-text-cp"
      } ${weight === "base" && "base-text-cp"} ${
        weight === "semiBold" && "semiBold-text-cp"
      } ${weight === "bold" && "bold-text-cp"}`}
    >
      {children}
    </p>
  );
};

export default BaseText;
