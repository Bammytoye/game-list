import { useEffect, useState } from "react";
import PropTypes from "prop-types"; 
import FrontBanner from "../components/FrontBanner";
import GlobalApi from "../services/GlobalApi";
import TrendingGames from "./TrendingGames";
import GameByGenreId from "./GameByGenreId";

function GameList({ genreID, selectedGamesGenreName }) {
    const [getAllGames, setGetAllGames] = useState([]);
    const [gameByGenreId, setGameByGenre] = useState([]);

    useEffect(() => {
        getAllGameList();
        if (genreID) {
            getGamesByGenreId(genreID);
        }
    }, [genreID]);  

    const getAllGameList = () => {
        GlobalApi.getGames.then((res) => {
            setGetAllGames(res.data.results);
        });
    };

    const getGamesByGenreId = (id) => {
        GlobalApi.getGamesByGenreId(id).then((res) => {
            setGameByGenre(res.data.results);
        });
    };

    return (
        <div>
            {getAllGames?.length > 0 && gameByGenreId?.length > 0 ? (
                <div>
                    <FrontBanner gameBanner={getAllGames[0]} />
                    <TrendingGames TrendingGame={getAllGames} />
                    <GameByGenreId GameByGenreList={gameByGenreId} selectedGamesGenreName={selectedGamesGenreName} />
                </div>
            ) : null}
        </div>
    );
}

GameList.propTypes = {
    genreID: PropTypes.number.isRequired, 
    selectedGamesGenreName: PropTypes.string.isRequired, 
};

export default GameList;
