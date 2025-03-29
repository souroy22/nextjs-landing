import React, { ReactNode } from "react";

interface IndustryLayoutProps {
  children: ReactNode;
}

const IndustryLayout: React.FC<IndustryLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default IndustryLayout;
