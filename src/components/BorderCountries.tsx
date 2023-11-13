import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react"
import { Country } from "../types/models"

type CountryProp = {
    borders: string[]
}

const BorderCountries = ({ borders }: CountryProp) => {
    const [borderCountries, setBorderCountries] = useState<Country[] | null>(null)


    if (borders) {
        const query = borders.join(",")
        const fetchCountry = async () => {
            try {
                await axios
                    .get(`https://restcountries.com/v3.1/alpha?codes=${query}`)
                    .then((response) => {
                        const result = response.data;
                        setBorderCountries(result)
                    });
            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                  console.log(error.message);
                  alert(`Could not load border countries: ${error.message}`);
                } else {
                  console.log("An unknown error occurred:", error);
                  alert("An unknown error occurred");
                }
              }
        }

        useEffect(() => {
            fetchCountry()
        }, [])
    }

    return (
        <>
            {borders ? (<div className={`${borders.length < 5 ? "xl:flex xl:items-center" : ""} mt-4 w-full`}>
                <p className="flex items-center mr-2 mb-2 font-semibold">Border Countries:</p>
                <div className="flex flex-wrap">
                    {borderCountries?.map((country, index) =>
                        <div key={index}>
                            <p className="font-light mb-2 text-center mr-2 py-1 px-3 bg-white dark:bg-[#2b3945] rounded-md shadow-md w-28"
                            >
                                {country.name.common}
                            </p>
                        </div>
                    )}
                </div>
            </div>) : (<span>No border countries</span>)}


        </>


    )
}

export default BorderCountries
