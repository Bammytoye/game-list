import { useEffect } from "react";
import PropTypes from "prop-types"; 

function FrontBanner({ gameBanner }) {
    useEffect(() => {
        
    }, [gameBanner]);
        
    return (
        <div className="relative">
            <div className="absolute bottom-0 p-2 md:p-6 lg:p-12 bg-gradient-to-t from-slate-900 to-transparent flex flex-col items-start lg:items-center justify-start lg:justify-center w-full">
                <h2 className="lg:text-[24px] md:text-[16px] text-[12px] font-bold text-white bg-slate-900 cursor-pointer hover:bg-gray-950 py-2 px-4 rounded-2xl">
                    {gameBanner.name}
                </h2>

                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2 md:text-[15px] text-[12px]">
                    Get Now
                </button>
            </div>

            <img 
                src={gameBanner.background_image} 
                alt={gameBanner.name}  
                className="w-full md:h-[320px] lg:h-full object-cover rounded-2xl"/>
        </div>
    );
}

FrontBanner.propTypes = {
    gameBanner: PropTypes.shape({
        name: PropTypes.string.isRequired, 
        background_image: PropTypes.string.isRequired, 
    }).isRequired, 
};

export default FrontBanner;
