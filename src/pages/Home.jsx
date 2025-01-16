import { useState } from "react";
import GameList from "../components/GameList";
import GenreList from "../components/GenreList";

function Home() {
    const [selectedGenreID, setSelectedGenreID] = useState(4);  
    const [selectedGamesGenreName, setSelectedGamesGenreName] = useState('Action');

    const handleGenreSelection = (genreID, genreName) => {
        setSelectedGenreID(genreID);
        setSelectedGamesGenreName(genreName);
    };

    return (
        <div className='grid grid-cols-4 gap-2 px-4'>
            <div className="hidden md:block h-full px-3 border-r-2 dark:border-gray-800 border-gray-300 rounded-md">
                <GenreList genreID={handleGenreSelection} />
            </div>

            <div className="col-span-4 md:col-span-3 px-3">
                <GameList genreID={selectedGenreID} selectedGamesGenreName={selectedGamesGenreName} />
            </div>
        </div>
    );
}

export default Home;
