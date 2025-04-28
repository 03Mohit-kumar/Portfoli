import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navitem = [
    {
      id: 1,
      text: "Home"
    },
    {
      id: 2,
      text: "About"
    },
    {
      id: 3,
      text: "Portfolio"
    },
    {
      id: 4,
      text: "Experience"
    },
    {
      id: 5,
      text: "Contact"
    }
  ];

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed left-0 right-0 z-50 bg-white text-xl'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex space-x-2'>
            
            <img src="/images/photo.png" className="h-12 w-12 rounded-full" alt="Mohi T Web Developer" />
            <h1 className='font-semibold text-xl cursor-pointer'>Mohi 
              <span className='text-red-500 text-2xl'>T</span>
              <p className='text-sm'>Web Developer</p>
            </h1>
          </div>

        
          <div>
            <ul className='hidden md:flex space-x-8'>
              {navitem.map(({ id, text }) => (
                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                  <Link 
                    to={text} 
                    smooth={true} 
                    duration={500} 
                    offset={-70} 
                    activeClass='active'
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className='md:hidden'>
              {menu ? <IoCloseSharp size={24} /> : <GiHamburgerMenu size={24} />}
            </div>
          </div>
        </div>

       
        {menu && (
          <div className='bg-white'>
            <ul className='md:hidden flex flex-col items-center justify-center h-screen space-y-3 text-xl'>
              {navitem.map(({ id, text }) => (
                <li 
                  className='hover:scale-105 duration-200 cursor-pointer font-semibold' 
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass='active'
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
