import React from "react";
import Book1 from "../../assets/books/book2.jpg";
import Book2 from "../../assets/books/book1.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "His Life Will Forever Be Changed",
    description:
      "An inspiring journey of resilience and transformation that will motivate readers to embrace change and growth in their own lives.",
  },
  {
    id: 2,
    img: Book2,
    title: "Who's There?",
    description:
      "A suspenseful thriller that keeps you on the edge of your seat, exploring the mysteries behind unexpected visitors and hidden secrets.",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description:
      "A heartfelt story about finding one's place in the world, overcoming adversity, and discovering the true meaning of family and belonging.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = React.useState(Book1);
  const [title, setTitle] = React.useState("His Life Will Forever Be Changed");
  const [description, setDescription] = React.useState(
    "An inspiring journey of resilience and transformation that will motivate readers to embrace change and growth in their own lives."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text Content */}
          <div
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              {title}
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-right text-sm">
                by Anonymous
              </p>
            </h1>
            <p
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="text-sm"
            >
              {description}
            </p>
            <div>
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-once="true"
                src={imageId}
                alt={title}
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
              />
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
              {ImageList.map((item) => (
                <img
                  key={item.id}
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={item.img}
                  onClick={() => {
                    setImageId(item.img);
                    setTitle(item.title);
                    setDescription(item.description);
                  }}
                  alt={item.title}
                  className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
