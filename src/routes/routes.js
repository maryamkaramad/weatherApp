import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import WeatherDay from "../pages/WeatherDay";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'weatherday/:city',
        element: <WeatherDay />
    }
])