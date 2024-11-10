import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="pt-[96px]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;