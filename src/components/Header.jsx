import { useContext } from 'react';
import logo from './../assets/images/logo.png';
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from 'react-icons/hi2';
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className='flex items-center justify-center space-x-5 py-3 px-6'>
            <img src={logo} alt="Game Logo" width={60} height={60} />

            <div className='flex bg-gray-200 p-2 w-full items-center mx-5 rounded-lg dark:bg-white'>
                <HiOutlineMagnifyingGlass className='dark:text-black'/>
                <input
                    type="text"
                    placeholder='Search for a game...'
                    className='bg-transparent outline-none px-3 '
                />
            </div>

            <div className='cursor-pointer'>
                {theme === 'light' ? (
                    <HiMoon
                        className='text-4xl bg-gray-200 text-black p-1 rounded-full'
                        onClick={toggleTheme}
                    />
                ) : (
                    <HiSun
                        className='text-4xl bg-gray-200 text-black p-1 rounded-full'
                        onClick={toggleTheme}
                    />
                )}
            </div>
        </div>
    );
}

export default Header;
