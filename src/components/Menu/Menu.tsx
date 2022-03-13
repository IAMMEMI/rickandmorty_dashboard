import { Grid } from "@mui/material";

export const Menu = () => {
  return (
    <div>
      <Grid item>
        <a href="/">Home</a>
      </Grid>
      <Grid item>
        <a href="/favorites">Favourites</a>
      </Grid>
    </div>
  );
};
