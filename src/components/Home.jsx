import React from "react";
// import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full-stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Full-stack web engineer with a background in developing efficient software applications in a global market. 
          2+ years of industry experience, including mentoring 15+ junior developers to achieve concrete goals on a strict deadline.
           My strong skills include React, Redux, JavaScript and Ruby. I also love ralis and in the process of mastering it.
            Currently, I love to work on front-end web application using technologies like React, Redux,Tailwind and Bootstrap. 
            When I'm not at my laptop, I love to go out and experience the beautiful nature, having a walk with my dog.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            // src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;