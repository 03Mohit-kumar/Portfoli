import React from 'react';
import { 
    FaFacebook, 
    FaTwitter,
    FaInstagram,
    FaLinkedinIn 
} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl contain mx-auto px-4 md:px-20 text-white'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <FaFacebook size={24}/>
                    <FaTwitter size={24}/>
                    <FaInstagram size={24}/>
                    <FaLinkedinIn size={24}/>
                </div>
                <div className='mt-8 border-t text-gray-700 pt-8 flex flex-col items-center'>
                    <p className='text-sm font-bold'>&copy; © 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}

export default Footer;
