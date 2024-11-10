import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="pt-[96px]">
                <Outlet/>
            </div>
        </div>
    );
};

export default Root;