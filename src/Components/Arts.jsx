/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';

AOS.init()
const Arts = ({arts}) => {
    // console.log(arts);
    return (
        <Link to={`/matchingSubCategory/${arts.subcategory_name}`}>
            <div
                data-aos="fade-right" data-aos-duration="800"
                className="hero max-w-xl w-full h-80 rounded-xl overflow-x-hidden"
                style={{
                    backgroundImage: `url(${arts.subcategoryPhoto})`,
                    
                }}>
                <div className="rounded-xl hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div data-aos="fade-left" data-aos-duration = "500" className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{arts.subcategory_name}</h1>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Arts;