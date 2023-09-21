import React from 'react';
import ReactDOM from 'react-dom/client';
import GoogleFonts from "react-google-fonts";
import App from "./App";

import "leaflet/dist/leaflet.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js.map'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Lato&family=Poppins&display=swap"/>
        <App/>
    </React.StrictMode>
);
