export const tipos = async() => {
  const url = 'https://pokeapi.co/api/v2/type/';
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}