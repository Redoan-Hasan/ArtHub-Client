import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import SingleCraftCard from "./SingleCraftCard";


const Home = () => {
    const craftsCards = useLoaderData()
    // console.log(craftsCards);
    return (
        <div>
            <div>
                <Slider />
                <div className="max-w-screen-xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center py-2 md:py-10 lg:py-10">Craft Items</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 px-4 py-4">
                        {
                            craftsCards.map(singleCraft => <SingleCraftCard  singleCraft={singleCraft} key={singleCraft._id}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;