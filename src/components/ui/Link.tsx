import NextLink from "next/link";
import React from "react";

type Props = React.ComponentProps<typeof NextLink> & {
  children: React.ReactNode;
};

export const Link: React.FC<Props> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <NextLink
      className={`text-blue-500 underline transition-colors duration-200 hover:text-blue-700 ${className}`}
      {...props}
    >
      {children}
    </NextLink>
  );
};
