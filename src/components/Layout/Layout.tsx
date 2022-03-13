import React from "react";
import { Logo, Menu } from "components";
import { StyledLayout } from "./Layout.styles";
import { Grid } from "@mui/material";

export const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <Grid container justifyContent="space-between">
        <Logo />
        <Menu />
      </Grid>
      {children}
    </StyledLayout>
  );
};
