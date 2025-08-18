import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {};

const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div
      className={`rounded-xl bg-white w-full p-4 ${className || ""}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
