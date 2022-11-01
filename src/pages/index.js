import React from 'react'
import { handleGetOneDayWeather } from '../api/api'
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Header from '../components/Header';
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
        <Grid>
            <Header />
            <SelectCity city={city} setCity={setCity} />
            <Onepage cityWeather={cityWeather} city={city} />


        </Grid>

    )
}

export default Home