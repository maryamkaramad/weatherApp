import { RouterProvider } from 'react-router-dom'
import { router } from "./routes/routes"
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';
import { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
function App() {
  const [state, setstate] = useState("light")

  const Theme = createTheme({
    palette: {
      mode: state,
    },
  });
  const handledarkmode = () => {
    setstate("dark")
  }
  const handlelightmode = () => {
    setstate("light")
  }
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Button onClick={handlelightmode}  > <LightModeIcon /></Button>
      <Button onClick={handledarkmode}> <DarkModeIcon /></Button>

      <RouterProvider router={router} />

    </ThemeProvider>
  );
}

export default App;
