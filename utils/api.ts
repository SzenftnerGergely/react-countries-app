import axios from "axios"

export async function fetchCountries() {

  const response = await fetch(`https://restcountries.com/v3.1/all`);

  const result = await response.json();

  return result;
}

export const fetchAllCountries = async () => {
  try {
    await axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((response) => {
        const result = response.data;
        return result
      });
  } catch (error) {
    console.log(error);
  }
};
