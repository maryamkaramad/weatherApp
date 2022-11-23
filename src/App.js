import { RouterProvider } from 'react-router-dom'
import { router } from "./routes/routes"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTranslation } from 'react-i18next';

import { Grid } from '@mui/material';
import "./App.css"
function App() {
  const [state, setstate] = useState("light")
  const { t, i18n } = useTranslation();
  const Theme = createTheme({
    palette: {
      mode: state,
    },
    typography: {
      fontFamily:
        'Vazir',
    },
  });
  const handledarkmode = () => {
    setstate("dark")
  }
  const handlelightmode = () => {
    setstate("light")
  }
  const handleclick = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Grid container p={2} justifyContent={"space-between"} xs={12} sx={{ backgroundColor: "#e1f5fe" }}>
        <Grid item container xs={6}>
          <Button onClick={handlelightmode}  > <LightModeIcon /></Button>
          <Button onClick={handledarkmode}> <DarkModeIcon /></Button>
        </Grid>
        <Grid item container xs={6} justifyContent={"flex-end"} gap={1}>
          <Button onClick={() => handleclick("fa")} variant={"contained"} > فارسی</Button>
          <Button onClick={() => handleclick("en")} variant={"contained"} > انگلیسی</Button>
        </Grid>

        {/* <p>{t("s.1")}</p> */}
      </Grid>

      <RouterProvider router={router} />

    </ThemeProvider>
  );
}

export default App;
