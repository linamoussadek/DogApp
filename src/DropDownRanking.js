import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownRanking(props) {

    const handleChange = (event) => {
        props.setRanking(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel>Rank ratings from</InputLabel>
                <Select
                    value={props.ranking}
                    label="Rank ratings from"
                    onChange={handleChange}>
                    <MenuItem value={'most recent'}>Most Recent</MenuItem>
                    <MenuItem value={'highest'}>Highest</MenuItem>
                    <MenuItem value={'lowest'}>Lowest</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
