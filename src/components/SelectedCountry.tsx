import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { BsArrowLeft } from "react-icons/bs"
import BorderCountries from "./BorderCountries"
import { Country } from "../types/models"

const SelectedCountry = () => {
    const [country, setCountry] = useState<Country[] | null>(null)
    const params = useParams()

    const fetchCountry = async (name: string | undefined) => {
        try {
            await axios
                .get(`https://restcountries.com/v3.1/name/${name}`)
                .then((response) => {
                    const result = response.data;
                    setCountry(result)
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCountry(params.id)
    }, [params.id])

    return (
        <>
            {country ?
                (
                    <div className="flex flex-col items-center justify-center">
                        <div className="max-w-[1440px] w-10/12">
                            <Link to={"/"}>
                                <div className="my-16 flex items-center justify-around 
                        bg-white shadow-md rounded-md dark:text-white 
                        dark:bg-[#2b3945] max-w-[8rem] py-2 px-6 hover:scale-105
                        active:scale-100 transition-all"
                                >
                                    <BsArrowLeft className="text-lg" />
                                    <span>Back</span>
                                </div>
                            </Link>
                            <div className="flex justify-between">
                                <div className="w-[45%] min-h-[464px] flex items-center">
                                    <img src={country[0].flags.svg} alt={country[0].flags.alt} className=" object-fill"/>
                                </div>

                                <div className="py-16 flex flex-col justify-between w-[45%]">

                                    <h1 className="dark:text-white text-3xl font-bold">{country[0].name.common}</h1>

                                    <div>
                                        <div className="flex justify-between">
                                            <div className="flex flex-col">
                                                <p className="font-semibold">Native Name: <span className="font-light">{country[0].name.common}</span></p>
                                                <p className="font-semibold">Population: <span className="font-light">{country[0].population}</span></p>
                                                <p className="font-semibold">Region: <span className="font-light">{country[0].region}</span></p>
                                                <p className="font-semibold">Sub Region: <span className="font-light">{country[0].subregion}</span></p>
                                                <p className="font-semibold">Capital: <span className="font-light">{country[0].capital}</span></p>
                                            </div>
                                            <div>
                                                <p>Top Level Domain: <span className="font-light">{country[0].tld}</span></p>
                                                <div className="font-semibold flex"><p className="mr-1">Currencies:</p>
                                                    {Object.keys(country[0].currencies).map((currencyCode, index) => {
                                                        const currency = country[0].currencies[currencyCode];
                                                        return (
                                                            <div key={index} className="font-light">
                                                                <p className="mr-1">{currency.name}</p>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <div className="font-semibold flex"><p className="mr-1">Languages: </p>
                                                    {Object.keys(country[0].languages).map((languageCode, index) => {
                                                        const languageName = country[0].languages[languageCode];
                                                        return (
                                                            <div key={index} className="font-light">
                                                                <p className="mr-1">{languageName}</p>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <BorderCountries borders={country[0].borders} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                (<span>Loading</span>)
            }
        </>
    )
}

export default SelectedCountry
