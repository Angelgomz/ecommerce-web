import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import Recipe1 from "./../../../images/recipe1.png";
import Recipe2 from "./../../../images/recipe2.png";
import Recipe3 from "./../../../images/recipe3.png";
import Recipe4 from "./../../../images/recipe4.png";
import Recipe5 from "./../../../images/recipe5.png";
import { Pagination } from "swiper/modules";
const Recipes = ({}) => {
    const images = [Recipe1, Recipe2, Recipe3, Recipe4, Recipe5];
    return (
        <div className="flex flex-col w-full overflow-hidden items-center md:flex-row">
            <div className="p-10 h-90 w-[100%] md:h[auto] md:w-[60%]">
                <Swiper
                    preloadImages={false}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex flex-col flex-wrap items-center gap-2 m-5">
                <p className="text-4xl dark-green"> Recetas </p>
                <p className="text-gray text-sm md:text-md">
                    Aprende como incorporar recetas de nutrilicious en tu vida
                </p>
                <button
                    type="submit"
                    className="text-white font-bold py-2 px-4 rounded button-color-text md:w-60"
                >
                    VER MÁS RECETAS
                </button>
            </div>
        </div>
    );
};
export { Recipes };
