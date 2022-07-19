import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffe000',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius: '16px',
  height: '1000px',
  border: '3px solid blue'
}));

const commonStyles = {
  bgcolor: 'background.paper',
  border: 3,
  borderColor: 'blue',
};

export const ParsePokemon = ({pokemon}) => {
    
    if (Object.keys(pokemon).length === 0) return;

    return (
    <Box m={2} pt={3}>
        <Grid container spacing={8}>
            <Grid item xs={12} >

                <Item>
                    <Box xs={12}>
                    <Box sx={{ ...commonStyles }} >
                        <img src = {pokemon.sprites.front_default} />
                    </Box>
                    </Box>
                    <Box xs={12}>
                    {pokemon.name}
                    </Box>
                </Item>        
            </Grid>
        </Grid>
    </Box>
  );

}
