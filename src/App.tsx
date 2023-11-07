import { useEffect, useState } from "react"
import CustomFilter from "./components/CustomFilter"
import Nav from "./components/Nav"
import SearchBar from "./components/SearchBar"
import { options } from "./constants"
import Cards from "./components/Cards"
import axios from "axios"

function App() {
  const [countries, setCountries] = useState([])
  const [key, setKey] = useState("region")
  const [value, setValue] = useState("africa")

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

  useEffect(()=> {
    fetchAllCountries(key, value)
  },[key, value])

  return (
    <div className="flex flex-col items-center">
      <Nav />
      <div className='max-w-[1440px] w-10/12 flex justify-between my-10 items-center'>
        <SearchBar setValue={setValue} setKey={setKey} />
        <CustomFilter options={options} setValue={setValue} setKey={setKey} />
      </div>
      <div className='card-wrapper'>
        {countries.map((country: { flags: { svg: string; }; name: { common: string; }; population: number; region: string; capital: string; }, index: number) =>
          <Cards country={country} key={index} />
        )}
      </div>

    </div>
  )
}

export default App
