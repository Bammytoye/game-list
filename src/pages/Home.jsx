import GenreList from "../components/GenreList"

function Home() {
    return (
        <div className='grid grid-cols-4 gap-2'>
            <div className="hidden md:block bg-red-400 h-full px-3">
                <GenreList />
            </div>

            <div className="col-span-4 md:col-span-3 bg-blue-400 md:px-3 px-6">Game List</div>
        </div>
    )
}

export default Home