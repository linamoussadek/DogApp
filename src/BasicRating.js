import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Rating} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";

export default function BasicRating(props) {
    const labels = {
        0: '10/10 - Cute dog',
        1: '11/10 - Nice dog',
        2: '12/10 - Beautiful dog',
        3: '13/10 - Amazing dog',
        4: '14/10 - Almost perfect dog',
        5: '15/10 - Perfect dog!',
    };

    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);

    function onSubmit(){
        /* 1. enregistrer le rating */
        let history = localStorage.getItem("history"); //on regarde la valeur qui correspond à la clé "history"
        if(history == null){ //s'il n'y a aucune valeur correspondante
            history = []; //on crée une liste qui vide qui pourra prendre les informations
        }
        else{
            history = JSON.parse(history) //tant qu'on rajoute des valeurs, on les convertit de String -> Objet
        }
        history.push({imgURL : props.url, rating: value}) //chaque valeur a un objet de deux attributs qui lui est associé
        localStorage.setItem("history", JSON.stringify(history)) //on rajoute l'objet dans la localStorage
        /* 2. fetch data */
        props.fetch_data()
        /* 3. reset form elements */
        setValue(props.defaultRating)
    }

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}>
            <Typography component="legend"
                        sx={{fontFamily: 'Gabriola',
                            color: 'black',
                            fontSize: '30px',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'}}>
                <b>Rate this dog!</b></Typography>
            <Rating name="customized-10"
                    defaultValue={10} max={10} readOnly />
            <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
            <br/>
            <Button variant="contained" sx={{
                display:'block',
                margin:'auto'}} onClick={onSubmit}>Submit</Button>
        </Box>
    );
}