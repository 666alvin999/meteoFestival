import React from 'react';
import ReactDOM from 'react-dom/client';
import GoogleFonts from "react-google-fonts";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Lato&family=Poppins&display=swap"/>
        <App/>
    </React.StrictMode>
);
