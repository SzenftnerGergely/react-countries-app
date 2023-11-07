import { SetStateAction, useState } from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";

type CustomFilterProps = {
    setValue: React.Dispatch<SetStateAction<string>>
    setKey: React.Dispatch<SetStateAction<string>>
  };
  

const SearchBar = ({setKey, setValue }: CustomFilterProps) => {
    const [filterValue, setFilterValue] = useState("")

    const handleChange = (e:any) => {
        setValue(e.target.value);
        setKey("name")
    }

    console.log(filterValue);

    return (
        <div className='relative flex items-center'>
            <div className='absolute left-4'>
                <HiMagnifyingGlass />
            </div>
            <input 
                type="text" 
                placeholder='Search for a country...' 
                className='min-w-[26rem] py-3 px-10 border-2 shadow-sm rounded-md' 
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
