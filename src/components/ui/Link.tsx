import NextLink from "next/link";
import React from "react";

type Props = React.ComponentProps<typeof NextLink> & {
  children: React.ReactNode;
};

const Link = ({ children, className = "", ...props }: Props) => {
  return (
    <NextLink
      className={`text-blue-500 underline transition-colors duration-200 hover:text-blue-700 ${className}`}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
