import { useEffect, useState } from "react";
import PropTypes from "prop-types"; 
import GlobalApi from "../services/GlobalApi";

function GenreList({ genreID }) {
    const [genreList, setGenreList] = useState([]);
    const [activeLink, setActiveLink] = useState(0);

    useEffect(() => {
        getGenreLists();
    }, []);

    const getGenreLists = () => {
        GlobalApi.getGenreList.then((res) => {
            setGenreList(res.data.results);
        });
    };

    return (
        <div>
            <h2 className="text-[20px] font-bold">Genres</h2>

            {genreList.map((item, index) => (
                <div
                    key={item.id}
                    onClick={() => {
                        setActiveLink(index);
                        genreID(item.id, item.name);  
                    }}
                    className={`flex gap-2 group items-center mb-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-lg ${
                        activeLink === index ? 'bg-gray-300 dark:bg-gray-600 font-bold' : ''
                    }`}
                >
                    <img
                        src={item.image_background}
                        className="w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-200"
                        alt={item.name}
                    />
                    <h3
                        className={`text-[13px] group-hover:font-bold transition-all ease-out duration-200 ${
                            activeLink === index ? 'font-bold lg:text-[20px]' : 'font-normal text-[13px]'
                        }`}
                    >
                        {item.name}
                    </h3>
                </div>
            ))}
        </div>
    );
}

GenreList.propTypes = {
    genreID: PropTypes.func.isRequired, 
};

export default GenreList;
