import { useEffect } from "react";
import GlobalApi from "../services/GlobalApi"

function GenreList() {

    useEffect(() => {
        getGenreList();
    }, []) 

    const getGenreList = () => {
        GlobalApi.getGenreList.then((res) => {
            console.log(res.data.results);
        })
    } 


    return (
        <div>
            GenreList
        </div>
    )
}

export default GenreList