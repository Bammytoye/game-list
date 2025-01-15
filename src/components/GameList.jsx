import { useEffect, useState } from "react"
import FrontBanner from "../components/FrontBanner"
import GlobalApi from "../services/GlobalApi"


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
                getAllGames?.length>0 ?<FrontBanner gameBanner={getAllGames[0]}/> :null 
            }
        </div>
    )
}

export default GameList