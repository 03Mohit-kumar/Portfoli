import React from "react";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: "/images/html.png",  
      name: "HTML",
    },
    {
      id: 2,
      logo: "/images/css.png",   
      name: "CSS",
    },
    {
      id: 3,
      logo: "/images/javascript.png", 
      name: "JavaScript",
    },
    {
      id: 4,
      logo: "/images/react.png", 
      name: "React",
    },
    {
      id: 5,
      logo: "/images/mongodb.png", 
      name: "MongoDB",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="text-white">
        <h1 className="text-3xl font-bold mb-5 text-white">Experience</h1>
        <p className="font-bold text-white">I have 5 to 6 months of experience</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-3xl md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px] rounded-full"
                alt={name}
              />
              <div className="text-center mt-2">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
