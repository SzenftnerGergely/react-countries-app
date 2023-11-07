import { SetStateAction, useState } from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";

type CustomFilterProps = {
    setValue: React.Dispatch<SetStateAction<string>>
    setKey: React.Dispatch<SetStateAction<string>>
  };
  

const SearchBar = ({setKey, setValue }: CustomFilterProps) => {
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
        <div className='relative flex items-center'>
            <div className='absolute left-4'>
                <HiMagnifyingGlass className="dark:text-gray-100" />
            </div>
            <input 
                type="text" 
                placeholder='Search for a country...' 
                className='min-w-[26rem] py-3 px-10 shadow-sm rounded-md 
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
