import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { Link } from "react-router-dom";
const Onepage = ({ cityWeather, city }) => {
    return (
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{ mt: 20 }} textAlign={"right"}>
            <Card container item sx={{ minWidth: "30%" }} >
                <CardContent container item >

                    <Typography item variant="h5" component="div">
                        شهر: {cityWeather.name}
                    </Typography>
                    <Typography item sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {cityWeather?.sys?.country}:کشور

                    </Typography>
                    <Typography item sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        سرعت باد: {cityWeather?.wind?.speed}

                    </Typography>
                    <Typography item sx={{ mb: 1.5 }} color="text.secondary">
                        دما:{cityWeather?.main?.temp}                    </Typography>
                    <Typography item variant="body2">
                        وضعیت هوا:{cityWeather?.weather?.[0]?.description}

                    </Typography>
                </CardContent>
                <Grid container item justifyContent={"flex-end"}>
                    <CardActions container item justifyContent={"flex-end"} >
                        <Link to={`weatherday/${city}`}>
                            <Button item size="small" variant="outlined">آب و هوای 5روز آینده </Button></Link>
                    </CardActions></Grid>
            </Card>
        </Grid>
    )
}

export default Onepage