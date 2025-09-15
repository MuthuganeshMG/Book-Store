import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";

const booksDatas = [
  {
    id: 1,
    img: Book1,
    title: "Who's There",
    rating: 5.0,
    author: "Alex Johnson",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John Smith",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boys",
    rating: 4.7,
    author: "Emily Clark",
  },
  {
    id: 4,
    img: Book2,
    title: "The Journey",
    rating: 4.4,
    author: "Michael Lee",
  },
  {
    id: 5,
    img: Book1,
    title: "Hidden Secrets",
    rating: 4.5,
    author: "Sophia Davis",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Curated Book Collection
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Explore our top picks from a variety of genres. Discover books that inspire, educate, and entertain.
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksDatas.map((booksData) => (
                <div key={booksData.id} className="space-y-3">
                  <img
                    src={booksData.img}
                    alt={booksData.title}
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{booksData.title}</h3>
                    <p className="text-sm text-gray-700">{booksData.author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{booksData.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/80 duration-200">
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
