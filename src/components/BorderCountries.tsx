import axios from "axios";
import { useState, useEffect } from "react"
import { Country } from "../types/models"

type CountryProp = {
    borders: string[]
}

const BorderCountries = ({ borders }: CountryProp) => {
    const [borderCountries, setBorderCountries] = useState<Country[] | null>(null)
    
    if(borders) {
        const query = borders.join(",")
        const fetchCountry = async () => {
            try {
                await axios
                    .get(`https://restcountries.com/v3.1/alpha?codes=${query}`)
                    .then((response) => {
                        const result = response.data;
                        setBorderCountries(result)
                    });
            } catch (error) {
                console.log(error);
            }
        };
    
        useEffect(() => {
            fetchCountry()
        }, [])
    }

    return (
        <>

            {borders ? (<div className="flex mt-4">
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
