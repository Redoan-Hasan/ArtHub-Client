import { useLoaderData } from "react-router-dom";
import Art from "./Art";


const MatchingSubcategory = () => {
    const arts = useLoaderData()
    console.log(arts);
    return (
        <div>
            <div className="grid grid-cols-1 gap-3">
                {arts.map(art =><Art key={art._id} art={art}></Art>)}
            </div>
        </div>
    );
};

export default MatchingSubcategory;