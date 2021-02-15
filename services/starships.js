import axios from 'axios';

export const getAllStarships = async props => {
  try {
    const apiUrl = `https://swapi.dev/api/starships/?page=${props}`;
    const response = await axios
      .get(apiUrl)
      .then(res => res.data)
      .catch(error => error.response);

      if(response != undefined)
        return response;
  } catch (error) {
    return error;
  }
}
