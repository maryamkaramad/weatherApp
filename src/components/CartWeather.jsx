import React from "react";
import { Grid } from "@mui/material";
const CartWeather = ({ index, cityWeatherFuture }) => {
  return (
    <Grid
      item
      container
      key={index}
      flexDirection={"column"}
      alignItems={"flex-end"}
      gap={2}
      boxShadow={4}
      p={5}
      textAlign={"right"}
    >
      <Grid item> تاریخ: {cityWeatherFuture?.[index]?.dt_txt}</Grid>
      <Grid item>دما: {cityWeatherFuture?.[index]?.main?.temp}</Grid>
      <Grid item>
        {" "}
        وضعیت هوا: {cityWeatherFuture?.[index]?.weather?.[0].description}
      </Grid>
    </Grid>
  );
};

export default CartWeather;
