import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LinearProgress from '@mui/material/LinearProgress';
import './i18next';
import { I18nextProvider } from "react-i18next";
import { Grid } from '@mui/material';
import i18next from "i18next";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <Suspense fallback={(<Grid><LinearProgress color="inherit" /></Grid>)}>
      <App />
    </Suspense>
  </I18nextProvider>
);

reportWebVitals();
