import React, { useCallback } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import aftabi from "../../src/assets/img/aftabi.png";
import abri from "../../src/assets/img/abri.png";
import poshiazabr from "../../src/assets/img/poshiaz abr.png";
import baroni from "../../src/assets/img/baroni.png";
import abrmotarakem from "../../src/assets/img/abrmotarakem.png";

const Onepage = ({ cityWeather, city }) => {
    const { t, i18n } = useTranslation();
    const conditions = useCallback((cityWeather) => {
        const t = cityWeather?.weather?.[0]?.description
        if (t === "آسمان صاف") return <Avatar alt="aftabi" src={aftabi} />
        if (t === "کمی ابری") return <Avatar alt="abri" src={abri} />
        if (t === "ابرهای پارچه پارچه شده") return <Avatar alt="poshiazabr" src={poshiazabr} />
        if (t === "پوشیده از ابر") return <Avatar alt="baroni" src={baroni} />
        if (t === "ابرهای پراکنده") return <Avatar alt="abrmotarakem" src={abrmotarakem} />
        else return <Avatar alt="aftabi" src={aftabi} />

    }, [cityWeather])
    return (
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{ mt: 20, opacity: "0.9", backgroundColor: "" }} textAlign={"right"} >
            <Card container item sx={{ minWidth: "10%" }} justifyContent={"center"}>
                <CardContent container item justifyContent={"center"} sx={i18n.languages[0] === "fa" ? { textAlign: "right" } : { textAlign: "left" }}>

                    <Typography item variant="h5" component="div">
                        {cityWeather.name}
                    </Typography>
                    <Typography item sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <Grid>

                        </Grid>
                        {t("wind speed.1")}: {cityWeather?.wind?.speed}

                    </Typography>
                    <Typography item sx={{ mb: 1.5 }} color="text.secondary">
                        {t("temperature.1")}: {cityWeather?.main?.temp}</Typography>
                    <Grid item container xs={12} alignItems={"center"} justifyContent={"center"}>
                        <Grid width={70}>
                            {conditions(cityWeather)}

                        </Grid>

                    </Grid>



                </CardContent>
                <Grid container item justifyContent={"flex-end"}>
                    <CardActions container item justifyContent={"flex-end"} >
                        <Link to={`weatherday/${city}`}>
                            <Button item size="small" variant="outlined"> {t("five.1")} </Button></Link>
                    </CardActions></Grid>
            </Card>
        </Grid>
    )
}

export default Onepage