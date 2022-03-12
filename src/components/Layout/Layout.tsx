import React from "react";
import { Logo } from "components";
import { StyledLayout } from "./Layout.styles";

export const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <Logo />
      {children}
    </StyledLayout>
  );
};
