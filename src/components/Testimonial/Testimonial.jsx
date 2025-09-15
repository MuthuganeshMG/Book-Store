import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor James",
    text: "The car rental service was seamless and convenient. The vehicle was clean, and the staff was very helpful throughout the process.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Narayan",
    text: "Excellent experience! The booking process was simple, and the car arrived on time. Highly recommend for anyone looking for reliable rentals.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sachin Tendulkar",
    text: "I had a great experience renting a car here. The service was professional, and the car was in top condition. Definitely coming back!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div data-aos="fade-up" data-aos-duration="300" className="py-10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-20 max-w-[600px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What our customers say
          </p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-xs text-gray-400">
            Hear from our satisfied clients who have experienced smooth and reliable car rentals.
          </p>
        </div>

        {/* Slider */}
        <div data-aos="zoom-in" data-aos-duration="300" className="max-w-[600px] mx-auto">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="px-2">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <img
                    className="rounded-full w-20 h-20 mx-auto"
                    src={data.img}
                    alt={`Photo of ${data.name}`}
                  />
                  <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
                    "{data.text}"
                  </p>
                  <h1 className="text-center text-xl font-bold text-black/80 dark:text-white mt-2">
                    {data.name}
                  </h1>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
