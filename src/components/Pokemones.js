export const ListPokemones = ({pokemones}) => {

  let final = [];
  Object.keys(pokemones).map(key => (
    final.push(<li key={key}>{pokemones[key].name}</li>)
  ));

  return <ul>{final}</ul>
}
