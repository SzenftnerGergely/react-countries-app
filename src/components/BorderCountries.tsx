import { useState, useEffect } from "react"
import { Country, CountryProp } from "../types/models"
import { fetchData } from "../utils/api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const fadeInAnimationVariants = {
    initial:{ opacity: 0, y: 100 },
    animate: (index: number) => ({ opacity: 1, y: 0, transition: {delay: 0.08 * index} })
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
        }, [query])
    }

    return (
        <>
            {borders ? (<div className={`${borders.length < 5 ? "xl:flex xl:items-center" : ""} mt-4 w-full`}>
                <p className="flex items-center mr-2 mb-2 font-semibold">Border Countries:</p>
                <div className="flex flex-wrap">

                    {borderCountries?.map((country, index) =>
                        <Link to={`/selected/${country.name.common}`} key={index}>
                            <motion.p 
                                className="font-light mb-2 text-center mr-2 py-1 
                                px-3 bg-white dark:bg-[#2b3945] rounded-md 
                                shadow-md w-28 hover:bg-gray-100 active:bg-gray-50
                                dark:hover:bg-gray-600 dark:active:bg-gray-500"
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: false
                                }}
                                custom={index}
                            >
                                {country.name.common}
                            </motion.p>
                        </Link>
                    )}
                </div>
            </div>) : (<span>No border countries</span>)}


        </>


    )
}

export default BorderCountries
