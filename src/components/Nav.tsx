import { BsMoon } from "react-icons/bs";

const Nav = () => {
    return (
        <nav className='w-full bg-white py-6 border-b-2 shadow-sm flex justify-center'>
            <div className='max-w-[1440px] w-10/12 flex justify-between items-center'>
                <h1 className='text-xl font-bold'>Where in the world?</h1>
                <div className='flex justify-between items-center gap-3'>
                    <BsMoon />
                    <p className='font-semibold'>Dark Mode</p>
                </div>

            </div>
        </nav>
    )
}

export default Nav
