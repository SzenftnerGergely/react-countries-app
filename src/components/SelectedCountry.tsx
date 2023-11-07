import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

const SelectedCountry = () => {
    const [country, setCountry] = useState([])
    const { id } = useParams()


    console.log(country);

    const fetchCountry = async (name: string) => {
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
        fetchCountry(id)
    },[])

    return (
        <div>
            <Link to={"/"}>
            <span>Back</span>
            </Link>
            <div>
                <div>
                    <img src={country[0].flags.svg} alt="flag" />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default SelectedCountry
