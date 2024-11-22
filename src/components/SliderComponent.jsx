
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderComponent = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseonHover:false,
        pauseonFocus:false,
        swipe:true,
        arrows:true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
  
    return (
      <div className="mt-5">
         <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className='h-60 '>
                    <div key={index} className=" flex justify-center  items-center" >
                        <img src={image} alt='' className="w-48 h-60 rounded hover:shadow-sm"  />
                    </div>
                </div> 
          ))}
         </Slider>
          
        </div>
    );
  };

export default SliderComponent