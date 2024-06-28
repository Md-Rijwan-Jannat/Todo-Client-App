import React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <div className="h-screen w-full max-w-7xl mx-auto p-2">{children}</div>
  );
};

export default Container;
