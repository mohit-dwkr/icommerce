import React, { useEffect } from 'react';
import { getData } from '../Context/DataContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const navigate = useNavigate();

  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowLeft
          className="arrows hidden md:block"
          style={{
            ...style,
            display: 'block',
            borderRadius: '50%',
            background: 'blue',
            color: 'white',
            position: 'absolute',
            left: '30px',
            padding: '8px',
            width: '40px',
            height: '40px',
          }}
        />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight
          className="arrows hidden md:block"
          style={{
            ...style,
            display: 'block',
            borderRadius: '50%',
            background: 'blue',
            color: 'white',
            position: 'absolute',
            right: '30px',
            padding: '8px',
            width: '40px',
            height: '40px',
          }}
        />
      </div>
    );
  };

  
  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {data?.slice(122, 128)?.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex justify-center items-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-6 py-10 md:py-20 max-w-7xl mx-auto w-full">
              
              
              <div className="text-center md:text-left space-y-4 md:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase text-white md:w-[500px] leading-tight">
                  {item.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/90 md:w-[500px] line-clamp-3">
                  {item.description}
                </p>
                <button
                  onClick={() => navigate("/products")}
                  className="bg-blue-600 text-white rounded-md cursor-pointer mt-2 px-4 py-2 hover:border-2 border-blue-500 hover:bg-transparent hover:text-blue-400 hover:scale-105 font-semibold transition-all"
                >
                  Shop Now
                </button>
              </div>

              
              <div className="flex justify-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded-full w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] hover:scale-105 transition-all shadow-2xl shadow-blue-500"
                />
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
