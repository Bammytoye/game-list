import { HiOutlineMagnifyingGlass } from "react-icons/hi2"

function SearchBox() {
    return (
        <div className="px-6">
            <div className='flex bg-gray-200 p-2 w-full items-center rounded-lg dark:bg-white mb-4'>
                <HiOutlineMagnifyingGlass className='dark:text-black' />
                <input
                    type="text"
                    placeholder='Search for a game...'
                    className='bg-transparent outline-none px-3 '
                />
            </div>
        </div>
    )
}

export default SearchBox