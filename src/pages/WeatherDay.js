import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { handleGetFiveDayWeather } from "../api/api";
import { Grid } from "@mui/material";
import { Typography } from '@mui/material';
import CartWeather from '../components/CartWeather';



const dataday = [0, 8, 16, 24, 32]


const WeatherDay = () => {
    const { city } = useParams()
    const [cityWeatherFuture, setCityWeatherFuture] = useState({})

    const handleGetData = async () => {
        const data = await handleGetFiveDayWeather(city)
        setCityWeatherFuture(data)


    }

    useEffect(() => {
        handleGetData()
    }, [])
    return (
        <Grid container justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={20} mt={8}>
            <Typography item variant='h2' color={"blue"}>{city}</Typography>
            <Grid item gap={6} display={"flex"} width={"80%"}>
                {dataday.map(index => (
                    <CartWeather index={index} cityWeatherFuture={cityWeatherFuture} />
                ))}



            </Grid>
        </Grid >
    )
}

export default WeatherDay