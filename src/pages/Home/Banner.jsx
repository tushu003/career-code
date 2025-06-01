import React from "react";
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';

const Banner = () => {
  return (
    <div>
      <div className="  min-h-screen">
        <div className="hero-content grid grid-cols-1 lg:gap-20 lg:grid-cols-2">
          
          <div>
            <h1 className="text-4xl font-bold">The <motion.span
            animate={
              {
                color:[ "#f9ff33 ", "#55ff33 ", "#33fff6 ", "#336bff ","#f633ff ", "#ff337a ", "#ff3333 " ],
                transition: {
                  delay: 0.5,
                  repeat: Infinity,
                  duration: 4,
                }
              }
            }
            >Easiest Way</motion.span> <br /> TO GET YOur JOB!</h1>
            <p className="py-6">
              Each month more then 3 millions seekers turn to <br /> website in their search for work, making over 140.000 <br /> applications every single day.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
       <div>
       <motion.img
            src={team2}
            animate={{
              y:[50, 100, 50]}}
              transition= {{
                repeat: Infinity,
                duration: 5}}
            
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-s-8 border-b-8 border-blue-500 shadow-2xl"
          />
          <motion.img
            src={team1}
            animate={{
              x:[100, 150, 100]}}
              transition= {{
                repeat: Infinity,
                delay: 5,
                duration: 10}}
            
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-s-8 border-b-8 border-blue-500 shadow-2xl"
          />
       </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
