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
  height: '150px',
  border: '3px solid blue'
}));

const commonStyles = {
  bgcolor: 'background.paper',
  border: 3,
  borderColor: 'blue',
};

const createItems = (pokemones)  => {

  let items = [];

  if (Array.isArray(pokemones)) {

    pokemones.map( (pokemon) => {
      items.push(
        <Grid item key={pokemon.name} xs={3} justifyContent="center">
          <Link to='/pokemon'>
            <Item>
              <Box xs={12}>
                <Box sx={{ ...commonStyles }}>
                  <img src = {pokemon.sprites.front_default} />
                </Box>
              </Box>
              <Box xs={12}>
                {pokemon.name}
              </Box>
            </Item>            
          </Link>
        </Grid>
      )
    });

  }

  return items;
}

export const ParsePokemones = ({pokemones}) => {

  let items = createItems(pokemones);

  return (
    <Box m={2} pt={3}>
        <Grid container spacing={8}>
            {items}
        </Grid>
    </Box>
  );

}
