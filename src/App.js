import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import ViewHistory from './ViewHistory'
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <ThemeProvider theme={createTheme({
                    palette:
                        {primary:
                                {main: '#885a39'},
                            secondary:
                                {main: '#5b5b5b'}}
                }
            )}>
                <HashRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/ViewHistory" element={<ViewHistory/>} />
                    </Routes>
                </HashRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;






