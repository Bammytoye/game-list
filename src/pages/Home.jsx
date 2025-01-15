import GenreList from "../components/GenreList"

function Home() {
    return (
        <div className='grid grid-cols-4 gap-2 px-4'>
            <div className="hidden md:block h-full px-3">
                <GenreList />
            </div>

            <div className="col-span-4 md:col-span-3 bg-blue-400 px-3">Game List</div>
        </div>
    )
}

export default Home