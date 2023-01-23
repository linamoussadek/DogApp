import React from 'react';
import './App.css';
import Dogs from './Home';
import Header from './Header';
import ViewHistory from './ViewHistory'
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter, Routes, Route} from "react-router-dom";


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
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Dogs/>} />
                        <Route path="ViewHistory" element={<ViewHistory/>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;






