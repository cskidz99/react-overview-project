import axios from 'axios';

export function getPokeImage(pokemon) {
  return axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemon}`)
}
