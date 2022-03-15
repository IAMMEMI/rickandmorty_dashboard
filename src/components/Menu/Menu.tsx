import { Grid, styled, Typography } from "@mui/material";

const Link = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  "&:hover": {
    fontStyle: "italic",
  },
}));

export const Menu = () => {
  return (
    <div style={{ alignSelf: "center" }}>
      <Grid item>
        <Link href="/">
          <Typography variant="h4">Home</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link href="/favorites">
          <Typography variant="h4">Favourites</Typography>
        </Link>
      </Grid>
    </div>
  );
};
