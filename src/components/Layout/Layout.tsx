import { FC } from "react";
import { Logo, Menu } from "components";
import { StyledLayout } from "./Layout.styles";
import { Grid } from "@mui/material";

export const Layout: FC = ({ children }) => {
  return (
    <StyledLayout>
      <Grid
        container
        justifyContent="space-between"
        style={{ marginBottom: "40px" }}
      >
        <Logo />
        <Menu />
      </Grid>
      {children}
    </StyledLayout>
  );
};
