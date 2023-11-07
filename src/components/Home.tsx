import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import SearchBar from './SearchBar';
import CustomFilter from './CustomFilter';
import Cards from './Cards';
import { options } from '../constants';
import axios from "axios"

const Home = () => {
  const [countries, setCountries] = useState([])
  const [key, setKey] = useState("all")
  const [value, setValue] = useState("")

  const fetchAllCountries = async (key: string, value: string) => {
    try {
      await axios
        .get(`https://restcountries.com/v3.1/${key}/${value}`)
        .then((response) => {
          const result = response.data;
          setCountries(result)
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCountries(key, value)
  }, [key, value])


  return (
    <div>
      <div className='max-w-[1440px] w-10/12 flex justify-between my-10 items-center'>
        <SearchBar setValue={setValue} setKey={setKey} />
        <CustomFilter options={options} setValue={setValue} setKey={setKey} />
      </div>
      <div className="card-wrapper" >
        {countries.map((country: { flags: { svg: string; }; name: { common: string; }; population: number; region: string; capital: string; }, index: number) =>
          <Link to={`/selected/${country.name.common}`} key={index}>
            <Cards country={country} key={index} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Home
