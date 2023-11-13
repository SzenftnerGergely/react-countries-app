import axios, { AxiosError } from "axios"

export const fetchData = async (url: string) => {
    try {
        const response = await axios.get(url)
        return response
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.message);
        alert(`Could not load border countries: ${error.message}`);
      } else {
        console.log("An unknown error occurred:", error);
        alert("An unknown error occurred");
      }
    }
  };