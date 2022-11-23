import React from "react";
import { Cities } from "../db/citydb";
import { Grid, TextField } from "@mui/material";
import { useTranslation } from 'react-i18next';

const SelectCity = ({ city, setCity }) => {
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <Grid container xs={12} p={2} justifyContent={"center"} alignItems={"center"}>
      <Grid item sx={{ mt: "20px" }} xs={10} md={3}>
        <TextField
          fullWidth
          select
          value={city}
          onChange={handleChange}
          SelectProps={{ native: true }}
          variant="outlined"
        >
          {Cities.map((c) => (
            <option key={c.title} value={c.title}>

              {i18n.languages[0] === "fa" ? c.name : c.title}
            </option>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default SelectCity;
