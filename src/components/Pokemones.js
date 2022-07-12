import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { red } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: red,
  borderRadius: '16px'
}));

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '5rem',
  height: '5rem',
  justifyContent: "center"
};

const createItems = (pokemones)  => {
  let items = [];

  if (Array.isArray(pokemones)) {
    pokemones.map(function (pokemon, index, array) {

      items.push(
        <Grid item key={pokemon.name} xs={4}>
          <Item>
            <img src = {pokemon.sprites.front_default} />
            {pokemon.name}
          </Item>
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
