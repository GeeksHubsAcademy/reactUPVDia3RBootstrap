
import axios from 'axios';

export const bringCharactersRB = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=2`)
}