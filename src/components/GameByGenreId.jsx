import { useEffect } from "react";
import { GiBarbedStar } from "react-icons/gi";
import { LuMessageSquareDot } from "react-icons/lu";
import { PiFireFill } from "react-icons/pi";
import PropTypes from "prop-types"; 

function GameByGenreId({ GameByGenreList, selectedGamesGenreName }) {
    useEffect(() => {
        
    }, []);

    return (
        <div className="mt-10">
            <h2 className="font-bold text-[30px] mb-2">
                {selectedGamesGenreName} Games
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {GameByGenreList.map((game) => (
                    <div
                        key={game.id}
                        className="bg-white dark:bg-gray-600 rounded-xl shadow-md overflow-hidden w-full p-1 hover:scale-110 transition-all ease-in-out duration-300"
                    >
                        <img
                            src={game.background_image}
                            alt={game.name}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="p-2">
                            <h2 className="text-xl font-semibold mb-2 line-clamp-1 cursor-pointer">
                                {game.name}
                                <span className="text-sm dark:text-gray-100 text-gray-300 ml-2">({game.metacritic})</span>
                            </h2>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center text-gray-700 dark:text-white mb-2">
                                    <GiBarbedStar className="text-yellow-400 mr-1" />
                                    <span>{game.rating}</span>
                                </div>

                                <div className="flex items-center text-gray-700 dark:text-white mb-2">
                                    <LuMessageSquareDot className="text-blue-500 mr-1" />
                                    <span>{game.reviews_count}</span>
                                </div>

                                <div className="flex items-center text-gray-700 dark:text-white mb-4">
                                    <PiFireFill className="text-red-500 mr-1" />
                                    <span>{game.suggestions_count} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

GameByGenreId.propTypes = {
    GameByGenreList: PropTypes.array.isRequired, 
    selectedGamesGenreName: PropTypes.string.isRequired, 
};

export default GameByGenreId;
