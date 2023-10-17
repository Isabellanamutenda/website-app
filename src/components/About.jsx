import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Full-stack web engineer with a background in developing efficient software applications in a global market. 
          2+ years of industry experience, including mentoring 15+ junior developers to achieve concrete goals on a strict deadline.
          My strong skills include React, Redux, JavaScript and Ruby. I also love ralis and in the process of mastering it.
            Currently, I love to work on front-end web application using technologies like React, Redux,Tailwind and Bootstrap. 
            When I'm not at my laptop, I love to go out and experience the beautiful nature, having a walk with my dog.
        </p>

        <br />

        <p className="text-xl">
          Som of the technologies I'm familiar with
        </p>
      </div>
    </div>
  );
};

export default About;
