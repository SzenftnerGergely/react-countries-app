import { useState, useEffect } from "react"
import { Country } from "../types/models"
import { fetchData } from "../utils/api";

type CountryProp = {
    borders: string[]
}

const BorderCountries = ({ borders }: CountryProp) => {
    const [borderCountries, setBorderCountries] = useState<Country[] | null>(null)

    if (borders) {
        const query = borders.join(",")
        const url = `https://restcountries.com/v3.1/alpha?codes=${query}`

        const fetchBorderCountries = async () => {
            const response = await fetchData(url)
            if (response) {
                setBorderCountries(response.data)
            }
          }
        
          useEffect(() => {
            fetchBorderCountries()
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
