import { fetchData } from "./api.js";

const refs = {
  list: document.querySelector("list"),
};

fetchData(1).then((response) => console.log(response));
