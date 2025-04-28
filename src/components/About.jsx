import React from 'react';

const About = () => {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 font-bold'>
        <div className='text-white'>
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p className='text-2xl'>Hello, I'm Mohit, a passionate Web developer with a keen eye for MERN Stack .
        I strive to create impactful and visually stunning Software solutions that leave a lasting impression.</p>
        <br />
        <h1 className='text-green-500 text-xl font-semiblod'>Education & Training</h1>
        <span>
        [Degree/Certification], [Institution], [Year] [Degree/Certification],
        [Institution], [Year] [Relevant Course], [Platform/Institution], [Year]
        </span>
        <br />
        <br />
        <h1 className='text-green-500 text-xl font-semiblod'>Skills & Expertise</h1>
        <span>
        Proficient in [Programming Languages] Experienced with [Software Tools/Technologies] Strong grasp of [Design Principles/Concepts] 
        Excellent problem-solving skills Effective communicator and collaborator
        </span>

        <br />
        <br />
        <h1 className='text-green-500 text-xl font-semiblod'>Professional Experience</h1>
        <span>
        [Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements]
        [Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements] 
        [Freelance/Contract Work], [Client/Organization], [Dates] [Brief description of projects and contributions]
        </span>
        <br />
        
        {/* <h1 className='text-green-500 text-xl font-semiblod'>Achievements & Awards</h1>
        <span>
        [Award/Recognition], [Organization/Institution], [Year] [Achievement], [Organization/Platform], [Year]
        </span> */}
        <br />
        <h1 className='text-green-500 text-xl font-semiblod'>Mission Statement</h1>
        <span className='font-2xl'>
        My mission is to leverage my skills and creativity to deliver innovative 
        [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. 
        I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
        </span>
        </div>
    </div>
  );
}
export default About;
