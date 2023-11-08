import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { BsArrowLeft } from "react-icons/bs"

type Country = {
    name: {
        common: string
    }
}

const SelectedCountry = () => {
    const [country, setCountry] = useState<Country[] | null>(null)
    const params = useParams()

    console.log(country);

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
                                <div className="my-10 flex items-center justify-around 
                        bg-white shadow-md rounded-md dark:text-white 
                        dark:bg-[#2b3945] max-w-[8rem] py-2 px-6 hover:scale-105
                        active:scale-100 transition-all"
                                >
                                    <BsArrowLeft className="text-lg" />
                                    <span>Back</span>
                                </div>
                            </Link>
                            <div>
                                <div>

                                </div>
                                <div>
                                    <h1>{country[0].name.common}</h1>
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
