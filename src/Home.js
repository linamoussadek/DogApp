import React, {useEffect, useState} from 'react'
import './App.css'
import {Stack} from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import BasicRating from "./BasicRating";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Home() {
    let [url, setUrl] = useState('');
    const [breed, setBreed] = React.useState('');
    const [breeds, setBreeds] = React.useState([]);
    const handleChange = (event) => {
        setBreed(event.target.value);
        fetch_data(event.target.value);
    };

    useEffect(() => {
        fetch('breeds.txt').then(res => {
                if (res.ok) {
                    return res.text();
                }
                throw new Error('Request failed');
            }, networkError => console.log(networkError.message)
        ).then(textRes => {
            let split = textRes.split("\n");
            for (let i = 0; i < split.length; i++) {
                split[i] = split[i].slice(1).replaceAll('-', '/');
            }
            setBreeds(split);
        })
    }, [])


    function fetch_data(selectedBreed) {
        let fetchUrl = '';
        if (selectedBreed) {
            fetchUrl = 'https://dog.ceo/api/breed/' + selectedBreed + '/images/random'
        } else {
            fetchUrl = 'https://dog.ceo/api/breeds/image/random'
        }
        fetch(fetchUrl).then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Request failed');
            }, networkError => console.log(networkError.message)
        ).then(jsonRes => {
            setUrl(jsonRes.message)
        })
    }

    function formatBreed(breed) {
        return breed.charAt(0).toUpperCase() + breed.slice(1).replaceAll('/', ' ');
    }


    useEffect(() => {
        fetch_data()
    }, [])


    return (
        <div className="dog_main">
            <Box sx={{minWidth: 200}}>
                <br/>
                <FormControl fullWidth>
                    <InputLabel>Sort by breed</InputLabel>
                    <Select
                        value={breed}
                        label="Sort by breed"
                        onChange={handleChange}>
                        <MenuItem value=''>All</MenuItem>
                        {
                            breeds.map(breed => <MenuItem value={breed} key={breed}>{formatBreed(breed)}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Box>
            <img src={url} className="dog_img"/>
            <Box component="span" sx={{
                p: 2, backgroundColor: '#efd1bd',
                width: '500px',
                length: '100px',
                borderRadius: '0.5em',
                border: '2px solid #885a39'
            }}>
                <BasicRating fetch_data={() => fetch_data(breed)} url={url} defaultRating={0}/>
            </Box>
            <Stack spacing={2} direction="row">
                <Button variant="contained" sx={{m: 2}} onClick={() => fetch_data(breed)}
                        color={"secondary"}>Skip</Button>
            </Stack>
        </div>
    )
}

export default Home