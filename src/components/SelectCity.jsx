import React from "react";
import { Cities } from "../db/citydb";
import { Grid, TextField } from "@mui/material";


const SelectCity = ({ city, setCity }) => {
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item textAlign={"center"} sx={{ mt: "20px" }}>
        <TextField
          sx={{ width: "350px" }}
          select
          value={city}
          onChange={handleChange}
          SelectProps={{ native: true }}
          variant="outlined"
        >
          {Cities.map((c) => (
            <option key={c.title} value={c.title}>
              {c.name}
            </option>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default SelectCity;
