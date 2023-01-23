import React from 'react'
import './App.css'
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import Box from "@mui/material/Box";

function Header(){
    return(
        <div className ="header_main">
            <h1>Rate my dog 🐕</h1>
            <nav>
                <NavLink to="" style={{textDecoration: 'none'}}>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                        <Button variant="contained" sx={{m: 2}} color={"secondary"}>Home</Button>
                    </Box>
                </NavLink>
            </nav>
            <nav>
                <NavLink to="ViewHistory" className={"ml-auto"} style={{textDecoration: 'none'}}>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button variant="contained" sx={{m: 2}} color={"secondary"}>View History</Button>
                    </Box>
                </NavLink>
            </nav>
        </div>
    )
}

export default Header