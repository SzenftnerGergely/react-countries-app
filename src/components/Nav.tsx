import { BsMoonFill, BsSun } from "react-icons/bs";
import { useTheme } from "./ThemeContext";

const Nav = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <nav className='w-full bg-white dark:bg-[#2b3945] dark:border-[#2b3945] dark:text-gray-100 py-6 border-b-2 shadow-sm flex justify-center'>
            <div className='max-w-[1440px] w-10/12 flex justify-between items-center'>
                <h1 className='text-md sm:text-xl font-bold'>Where in the world?</h1>
                <div className='flex justify-between items-center gap-3'>
                    <button className=''
                        onClick={toggleTheme}
                    >
                        {
                            theme === "light" ? (
                                <BsSun />
                            ) : (
                                <BsMoonFill />
                            )
                        }

                    </button>
                    <p className='text-sm sm:text-base font-semibold'>Dark Mode</p>
                </div>

            </div>
        </nav>
    )
}

export default Nav
