const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = "b1cca9f4ff0056a5a4eafc6c5006a5a4";

const fetchData = (page) => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.message);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
};

const fetchDetails = (id) => {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.message);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
};

export { fetchData, fetchDetails };
