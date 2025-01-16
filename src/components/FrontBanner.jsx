import { useEffect } from "react"

function FrontBanner({gameBanner}) {
    useEffect(() => {
        console.log('gameBanner', gameBanner)
    }, [gameBanner])

    if (!gameBanner || !gameBanner.background_image) {
        return <div>No Banner Available</div>;
    }
    
    return (
        <div className="relative">
            <div className="absolute bottom-0 p-12 bg-gradient-to-t from-slate-900 to-transparent flex flex-col items-center justify-center w-full">
                <h2 className="text-[24px] font-bold text-white mb-2 bg-slate-900 cursor-pointer hover:bg-gray-950 py-2 px-4 rounded-2xl">
                    {gameBanner.name}
                </h2>

                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2">
                    Get Now
                </button>
            </div>

            <img 
                src={gameBanner.background_image} 
                alt="Banner"  
                className="w-full md:h-[320px] lg:h-full object-cover rounded-2xl"/>
        </div>
    )
}

export default FrontBanner