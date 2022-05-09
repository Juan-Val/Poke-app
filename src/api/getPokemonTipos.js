export const pokemonsPorTipo = async (tipo) => {
  const url = `https://pokeapi.co/api/v2/type/${tipo}/`
  const res = await fetch(url);
  const {pokemon} = await res.json();
  return pokemon;
}

export const pokemonHome = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=20';
  const data = await fetch(url);
  const dataJson = await data.json();
  return dataJson;
}

export const getPokemon = async (url) => {
  const data = await fetch(url);
  const dataJson = await data.json();
  const { name, sprites,id,types:[type] ,stats,height,weight} = dataJson;
  return { name, sprites,id, type, stats,height,weight };
}

