import React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <div className="h-screen w-full max-w-7xl mx-auto p-1 md:p-2 montserrat-regular">
      {children}
    </div>
  );
};

export default Container;
