import React from "react";
import { Grid, Button } from "@mui/material";

const Darkmode = ({ setstate }) => {
  const handledarkmode = () => {
    setstate("dark");
  };
  const handlelightmode = () => {
    setstate("light");
  };
  return (
    <Grid>
      <Button onClick={handlelightmode} variant={"outlined"} m={10}>
        {" "}
        lightmode
      </Button>
      <Button onClick={handledarkmode} variant={"outlined"}>
        {" "}
        darkmode
      </Button>
    </Grid>
  );
};

export default Darkmode;
