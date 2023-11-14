import axios, { AxiosError } from "axios"

export const fetchData = async (url: string) => {
    try {
        const response = await axios.get(url)
        return response
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.message);
        alert(`Error: ${error.message}`);
      } else {
        console.log("An unknown error occurred:", error);
        alert("An unknown error occurred");
      }
    }
  };