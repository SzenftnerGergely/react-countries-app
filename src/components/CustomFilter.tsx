import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { BsChevronDown } from 'react-icons/bs';
import { CustomFilterProps } from '../types/models';

const CustomFilter = ({ options, setValue, setKey }: CustomFilterProps) => {
    const [selectedCountry, setSelectedCountry] = useState(options[0])
    
    const handleChange = (e: any) => {
        setValue(e.name.toLocaleLowerCase());
        setKey("region")
    }

    return (
        <div>

            <div className='w-fit'>
                <Listbox
                    value={selectedCountry}
                    onChange={(e) => {
                        setSelectedCountry(e),
                        handleChange(e)
                    }}
                >
                    <div className='relative w-fit z-10'>
                        <Listbox.Button className="flex items-center custom-filter__btn">
                            {selectedCountry.name}
                            <BsChevronDown className="ml-10" />
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave='transition ease-in duration-100'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <Listbox.Options className="custom-filter__options">
                                {options.map((option) => (
                                    <Listbox.Option
                                        key={option.id}
                                        value={option}
                                        className={({ active }) => `relative cursor-default select-none 
                                        p-2 ${active ? 'bg-blue-500 text-white' :
                                                'text-gray-900'}`}
                                     >
                                        {({ selected }) => (
                                            <span
                                                className={`flex truncate ${selected ? 'font-medium' : 'font-normal'}`}
                                            >
                                                {option.name}
                                                {selected && <CheckIcon className='w-4 h-4' />}
                                            </span>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>

        </div>
    )
}

export default CustomFilter
