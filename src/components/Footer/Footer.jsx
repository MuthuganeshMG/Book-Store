import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Books Store
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              Books Store is your one-stop destination for the latest and
              classic books. Explore, read, and enjoy your favorite reads
              anytime, anywhere.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Coimbatore, Tamil Nadu, India</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 73732 30059</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500 dark:text-gray-200"
                  >
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold mb-3">Quick Links</h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    key={link.title + "quick"}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500 dark:text-gray-200"
                  >
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold mb-3">Location</h1>
              <p className="text-gray-700 dark:text-gray-300">
                We are located in Coimbatore, providing book lovers across the
                region easy access to a wide variety of books.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-10 border-t-2 border-gray-300/50 text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Books Store. All rights reserved | Made with ❤️ by MG
        </div>
      </section>
    </div>
  );
};

export default Footer;
