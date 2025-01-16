import { useEffect, useState } from "react"
import FrontBanner from "../components/FrontBanner"
import GlobalApi from "../services/GlobalApi"
import TrendingGames from "./TrendingGames"
import GameByGenreId from "./GameByGenreId";


function GameList() {
    const [ getAllGames, setGetAllGames ] = useState();
    const [ gameByGenreId, setGameByGenre ] = useState([]); 

    useEffect(() => {
        getAllGameList()
        getGamesByGenreId() 
    }, [])

    const getAllGameList = () => {
        GlobalApi.getGames.then((res) => {
            setGetAllGames(res.data.results)
            setGameByGenre(res.data.results)
        })
    }

    const getGamesByGenreId = () => {
        GlobalApi.getGamesByGenreId(4).then((res) => {
            console.log(res.data.results)
            setGetAllGames(res.data.results)
        })
    }


    return (
        <div>
            {
                getAllGames?.length>0 && gameByGenreId?.length>0 ? 
                <div>
                    <FrontBanner gameBanner={getAllGames[0]}/> 
                    <TrendingGames TrendingGame= {getAllGames}/>
                    <GameByGenreId GameByGenreList = {gameByGenreId} />  
                </div>
                :
                null
            }
        </div>
    )
}

export default GameList