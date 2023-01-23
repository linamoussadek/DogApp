import React from 'react'
import './App.css'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

function Header(){
    return(
        <div className ="header_main">
            <h1>Rate my dog 🐕</h1>
            <nav>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                        <Button variant="contained" sx={{m: 2}} color={"secondary"}>Home</Button>
                    </Box>
                </Link>
            </nav>
            <nav>
                <Link to="/ViewHistory" className={"ml-auto"} style={{textDecoration: 'none'}}>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button variant="contained" sx={{m: 2}} color={"secondary"}>View History</Button>
                    </Box>
                </Link>
            </nav>
        </div>
    )
}

export default Header