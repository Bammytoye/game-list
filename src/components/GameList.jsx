import { useEffect, useState } from "react"
import FrontBanner from "../components/FrontBanner"
import GlobalApi from "../services/GlobalApi"
import TrendingGames from "./TrendingGames"


function GameList() {
    const [ getAllGames, setGetAllGames ] = useState()

    useEffect(() => {
        getAllGameList()
    }, [])

    const getAllGameList = () => {
        GlobalApi.getGames.then((res) => {
            setGetAllGames(res.data.results)
        })
    }
    return (
        <div>
            {
                getAllGames?.length>0 ? 
                <div>
                    <FrontBanner gameBanner={getAllGames[0]}/> 
                    <TrendingGames TrendingGame= {getAllGames}/>  
                </div>
                :
                null
            }
        </div>
    )
}

export default GameList