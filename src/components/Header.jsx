import { useState } from 'react'
import logo from './../assets/images/logo.png'
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from 'react-icons/hi2'

function Header() {
    const [themeToggle, setThemeToggle] = useState(false)


    return (
        <div className='flex items-center justify-center space-x-5 py-3 px-10'>
            <img src={logo} alt="Game Logo" width={60} height={60}/>

            <div className='flex bg-gray-200 p-2 w-full items-center mx-5 rounded-lg'>
                <HiOutlineMagnifyingGlass />
                <input 
                    type="text" 
                    placeholder='Search for a game...' 
                    className='bg-transparent outline-none px-3'
                    />
            </div>

            <div className='cursor-pointer'>
                {themeToggle ? <HiMoon className='text-4xl bg-gray-200 text-black p-1 rounded-full'/> 
                : 
                <HiSun className='text-4xl bg-gray-200 text-black p-1 rounded-full'/>}
            </div>
        </div>
    )
}

export default Header