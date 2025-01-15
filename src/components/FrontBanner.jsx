import { useEffect } from "react"

function FrontBanner({gameBanner}) {
    useEffect(() => {
        console.log('gameBanner', gameBanner)
    }, [gameBanner])

    if (!gameBanner || !gameBanner.background_image) {
        return <div>No Banner Available</div>;
    }
    
    return (
        <div>
            <img 
                src={gameBanner.background_image} 
                alt="Banner"  
                className="w-full md:h-[320px] lg:h-full object-cover rounded-xl"/>
        </div>
    )
}

export default FrontBanner