import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-20">
        <div className="flex flex-col md:flex-row text-white ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-2xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl font-blod">
              <h1>Hello I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="md:text-md text-justify">
              I'm passionate about front-end and back-end web development.
              <br />Eager to build scalable, user-friendly websites and applications.
              <br />Looking for an opportunity to grow as a developer and
              <br />contribute to innovative projects
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.Youtube.com/" target="_blank">
                      <FaYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebookSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.Instagram.com/" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200  rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200  rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200  rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] " />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src="/images/photo.png" // Update image path to the public folder
              className="rounded-full md:w-[450px] h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
