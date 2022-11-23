import React, { useCallback } from "react";
import { Grid, Avatar } from "@mui/material";
import { useTranslation } from 'react-i18next';
import aftabi from "../assets/img/aftabi.png";
import abri from "../assets/img/abri.png";
import poshiazabr from "../assets/img/poshiaz abr.png";
import baroni from "../assets/img/baroni.png";
import abrmotarakem from "../assets/img/abrmotarakem.png";
import Typography from '@mui/material/Typography';

const CartWeather = ({ index, cityWeatherFuture }) => {
  const { t, i18n } = useTranslation();

  const conditions = useCallback((cityWeatherFuture) => {
    const t = cityWeatherFuture?.[index]?.weather?.[0].description
    if (t === "آسمان صاف") return <Avatar alt="aftabi" src={aftabi} />
    if (t === "کمی ابری") return <Avatar alt="abri" src={abri} />
    if (t === "ابرهای پارچه پارچه شده") return <Avatar alt="poshiazabr" src={poshiazabr} />
    if (t === "پوشیده از ابر") return <Avatar alt="baroni" src={baroni} />
    if (t === "ابرهای پراکنده") return <Avatar alt="abrmotarakem" src={abrmotarakem} />
    else return <Avatar alt="aftabi" src={aftabi} />

  }, [cityWeatherFuture])

  return (
    <Grid
      item
      container
      key={index}
      flexDirection={"column"}
      alignItems={"flex-end"}
      gap={2}
      boxShadow={4}
      p={2}
      sx={i18n.languages[0] === "fa" ? { alignItems: "flex-end" } : { alignItems: "flex-start" }}
      xs={12}
    >
      <Grid item xs={12}> <Typography >
        {t("Date.1")}: {cityWeatherFuture?.[index]?.dt_txt}
      </Typography></Grid>

      <Grid item xs={12} >
        <Typography>{t("temperature.1")} :{cityWeatherFuture?.[index]?.main?.temp}</Typography>
      </Grid>

      <Grid item xs={12}>

        {conditions(cityWeatherFuture)}
      </Grid>
    </Grid>
  );
};

export default CartWeather;
