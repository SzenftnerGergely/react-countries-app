import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import SearchBar from '../components/SearchBar';
import CustomFilter from '../components/CustomFilter';
import Cards from '../components/Cards';
import { options } from '../constants';
import { fetchData } from '../utils/api';

const Home = () => {
  const [countries, setCountries] = useState([])
  const [key, setKey] = useState("all")
  const [value, setValue] = useState("")
  const [loading, setIsLoading] = useState(false)
  const url = `https://restcountries.com/v3.1/${key}/${value}`

  const fetchAllCountries = async () => {
    setIsLoading(true)
    const response = await fetchData(url)
    if (response) {
      setTimeout(() => {
        setCountries(response.data)
        setIsLoading(false)
      }, 1000)
    }
  }

  useEffect(() => {
    fetchAllCountries()
  }, [key, value])

  return (
    <div className="flex flex-col items-center bg-[#fafafa] dark:bg-[#202c37]">
      <div className='max-w-[1440px] w-10/12 md:flex md:flex-row md:justify-between 
      md:items-center flex flex-col gap-4 my-10'>
        <SearchBar setValue={setValue} setKey={setKey} />
        <CustomFilter options={options} setValue={setValue} setKey={setKey} />
      </div>
      {loading ?
        (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full 
            border-4 border-solid border-current border-r-transparent 
            align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]
            bottom-1/2 left-1/2 absolute"
            >
          </div>
        )
        :
        (<div className="card-wrapper" >
          {countries.map((country: { flags: { svg: string; }; name: { common: string; }; population: number; region: string; capital: string; }, index: number) =>
            <Link to={`/selected/${country.name.common}`} key={index}>
              <Cards country={country} key={index} />
            </Link>
          )}
        </div>
        )}

    </div>
  )
}

export default Home
