import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box
      mb={10}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"blue"}
    >
      <Typography variant="h2">WeatherApp</Typography>
    </Box>
  );
};

export default Header;
