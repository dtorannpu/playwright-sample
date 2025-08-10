import React from "react";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const H1 = ({ children, className = "", ...props }: Props) => {
  return (
    <h1
      className={`text-4xl font-bold tracking-tight text-gray-900 dark:text-white ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default H1;
