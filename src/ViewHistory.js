import * as React from 'react';
import {experimentalStyled as styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DropDownRanking from "./DropDownRanking";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function ViewHistory() {
    const [ranking, setRanking] = React.useState('most recent');
    let historyArr = JSON.parse(localStorage.getItem('history') || '[]').reverse();
    if(ranking === 'highest'){
        historyArr.sort((h1, h2) => {
            if(h1.rating < h2.rating){
                return 1;
            }
            else{
                return -1;
            }
        });
    }
    else if(ranking === 'lowest'){
        historyArr.sort((h1, h2) => {
            if(h1.rating > h2.rating){
                return 1;
            }
            else{
                return -1;
            }
        });
    }

    return (
        <Box>
            <Box sx={{ml: 80, mr: 80, mt: 2}}>
                <DropDownRanking ranking={ranking} setRanking={setRanking}/>
            </Box>
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}} sx={{ p: 2, pt:2 }}>
            {historyArr.map((element, index) => ( //on change le mapping en fonction
                //du onChange de la dropdown
                    <Grid item xs={2} sm={2} md={2} key={index}>
                        <Card sx={{maxWidth: 345}}>
                            <CardMedia
                                sx={{height: 140}}
                                image={element.imgURL}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Rating: {element.rating + 10} /10
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            )}
        </Grid>
        </Box>
    );
}



