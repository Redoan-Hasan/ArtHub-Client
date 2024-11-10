// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Typewriter } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div>
        <Swiper className="h-full md:h-full lg:h-full xl:h-[calc(100vh-96px)]"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)
            }
        >
            <SwiperSlide>
            <div
                    className="hero h-[360px] md:min-h-screen lg:min-h-[685px] xl:min-h-screen"
                    style={{
                        backgroundImage: "url(https://i.postimg.cc/zXPbyNy2/detailed-art.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">
                        {
                                activeIndex === 0 && (
                                    <Typewriter words={["Detailed Art Showcases"]} 
                                    loop={1}
                                    cursor
                                    cursorStyle="|"
                                    cursorColor="purple"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000} 
                            />
                                )
                            }
                            </h1>
                        <p className="mb-5 font-medium">
                        {
                                activeIndex === 0 && (
                                    <Typewriter words={["Each artwork comes with an interactive showcase. Click on an item to learn more about the materials, techniques, and artist inspiration behind it. Zoom in to view intricate details of each painting or sketch, whether it’s a realistic oil portrait or a whimsical cartoon strip."]} 
                                    loop={1} // or `true` for repeating
                                    cursor
                                    cursorStyle="|"
                                    cursorColor="purple"
                                    typeSpeed={20}
                                    deleteSpeed={50}
                                    delaySpeed={50} 
                            />
                                )
                            }
                        </p>
                        
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div
                    className="hero h-[360px] md:min-h-screen lg:min-h-[685px] xl:min-h-screen"
                    style={{
                        backgroundImage: "url(https://i.postimg.cc/x1zCqzDq/seamless-experience.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">
                            {
                                activeIndex === 1 && (
                                    <Typewriter words={["Seamless Experience"]} 
                                    loop={1}
                                    cursor
                                    cursorStyle="|"
                                    cursorColor="purple"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000} 
                            />
                                )
                            }
                        </h1>
                        <p className="mb-5 font-medium">
                        {
                                activeIndex === 1 && (
                                    <Typewriter words={["ArtHub’s interface is designed for easy navigation. Filters allow you to quickly find artworks within specific subcategories or styles, such as watercolor florals or architectural charcoal sketches, helping users find exactly what they’re looking for."]} 
                                    loop={1} // or `true` for repeating
                                    cursor
                                    cursorStyle="|"
                                    cursorColor="purple"
                                    typeSpeed={20}
                                    deleteSpeed={50}
                                    delaySpeed={50} 
                            />
                                )
                            }
                        </p>
                        
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="hero h-[360px]  md:min-h-screen lg:min-h-[685px] xl:min-h-screen"
                    style={{
                        backgroundImage: "url(https://i.postimg.cc/GprBhDvr/art-gallery-antique-frame-concept.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">
                        {
                                activeIndex === 2 && (
                                    <Typewriter words={["Curated Art Collection"]} 
                                    loop={1}
                                    cursor
                                    cursorStyle="|"
                                    cursorColor="purple"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000} 
                            />
                                )
                            }
                            </h1>
                        <p className="mb-5 font-medium">
                        {
                                activeIndex === 2 && (
                                    <Typewriter words={["Our website focuses exclusively on high-quality Painting and Drawing pieces. Explore diverse subcategories, including Landscape Painting, Portrait Drawing, Watercolor Painting, Oil Painting, Charcoal Sketching, and Cartoon Drawing. Each category offers unique artworks, carefully curated to inspire creativity and appreciation for the craft."]} 
                                    loop={1} // or `true` for repeating
                                    cursor
                                    cursorStyle="|"
                                    cursorColor="purple"
                                    typeSpeed={20}
                                    deleteSpeed={50}
                                    delaySpeed={50} 
                            />
                                )
                            }
                        </p>
                        
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default Slider;