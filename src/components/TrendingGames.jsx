import { useEffect } from "react";

function TrendingGames({ TrendingGame }) {
    useEffect(() => {
        console.log(TrendingGame);
    }, [TrendingGame]);

    return (
        <div className="mt-7 hidden md:block">
            <h2 className="font-bold text-[30px] mb-2">
                Trending Games 
            </h2>
            <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 cursor-pointer">
                {
                    TrendingGame.map((game, index) => index < 4 && (
                        <div 
                            key={game.id || index}
                            className="dark:bg-[#76a8f75e] bg-[#a8a9ac5e] rounded-lg group hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                            <img 
                                src={game.background_image} 
                                alt={game.name} 
                                className="h-[270px] rounded-t-xl object-cover"
                                />
                            <h2 className="font-bold text-[17px] py-3 px-2">
                                {game.name}
                            </h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TrendingGames;
