import React from 'react'
import { handleGetOneDayWeather } from '../api/api'
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import Onepage from './onepage';
import SelectCity from '../components/SelectCity';




const Home = () => {
    const [city, setCity] = useState('Kermān');

    const [cityWeather, setCityWeather] = useState({})
    const handleGetData = async () => {
        const data = await handleGetOneDayWeather(city)
        setCityWeather(data)
    }
    useEffect(() => {
        handleGetData()
    }, [city])


    return (
        <Grid container xs={12} p={2}>
            <SelectCity city={city} setCity={setCity} />
            <Onepage cityWeather={cityWeather} city={city} />


        </Grid>

    )
}

export default Home