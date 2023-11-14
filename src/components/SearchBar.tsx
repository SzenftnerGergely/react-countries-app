import { useState } from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SerchbarProps } from '../types/models';

const SearchBar = ({setKey, setValue }: SerchbarProps) => {
    const [filterValue, setFilterValue] = useState("")

    const handleChange = (e:any) => {

        if(e.target.value !== "") {
            setKey("name")
            setValue(e.target.value);
        } else { 
            setKey("")
            setValue("all");
        }
    }

    return (
        <div className='relative flex items-center sm:w-full md:w-1/3'>
            <div className='absolute left-4'>
                <HiMagnifyingGlass className="dark:text-gray-100" />
            </div>
            <input 
                type="text" 
                placeholder='Search for a country...' 
                className='w-full sm:min-w-[26rem] py-3 px-10 shadow-sm rounded-md 
                dark:bg-[#2b3945] dark:text-white' 
                value={filterValue}
                onChange={(e) => {
                    setFilterValue(e.target.value)
                    handleChange(e)
                }}
            />
        </div>
    )
}

export default SearchBar
