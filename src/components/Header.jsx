import { useContext } from 'react';
import logo from './../assets/images/logo.png'; 
import { HiMoon, HiSun } from 'react-icons/hi2';
import { ThemeContext } from '../Context/ThemeContext';

function GameNavbar() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className='flex items-center justify-between space-x-5 py-3 px-6 border-b shadow-lg mb-2'>
            <img src={logo} alt="Game Logo" width={60} height={60} />

            <div>
                <ul className='flex gap-8 items-center pl-32 cursor-pointer'>
                    <li>Home</li>
                    <li>Games</li>
                    <li>Leader Boards</li>
                    <li>Community</li>
                    <li>Store</li>
                </ul>
            </div>

            <div className='cursor-pointer flex items-center gap-4'>
                <button type='submit' className='border dark:border-white border-gray-700 py-1 px-4 rounded-lg'>
                    Login
                </button>

                <button type='submit' className='border dark:border-white border-gray-700 py-1 px-4 rounded-lg'>
                    Register
                </button>

                {theme === 'light' ? (
                    <HiMoon
                        className='text-4xl bg-gray-200 text-black p-1 rounded-full cursor-pointer'
                        onClick={toggleTheme}
                    />
                ) : (
                    <HiSun
                        className='text-4xl bg-gray-200 text-black p-1 rounded-full cursor-pointer'
                        onClick={toggleTheme}
                    />
                )}
            </div>
        </div>
    );
}

export default GameNavbar;
