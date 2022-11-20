import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Grid
      container
      mb={10}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"blue"}

    >
      <Typography variant="h3">WeatherApp</Typography>
    </Grid>
  );
};

export default Header;
