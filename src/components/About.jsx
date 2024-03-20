import React from "react";

import {FaGraduationCap} from "react-icons/fa";
import {GiCardExchange} from "react-icons/gi";
import {GrTechnology} from "react-icons/gr";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (

  <div className="flex w-full justify-center items-center gradient-bg-about">

    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">

       <div className="flex-1 flex flex-col justify-start items-start  pl-5 pr-14">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
        Why Gark Sport Coin?
          <br />
          continue to know
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        Gark Sport Coin works hard towards changing the future of the digital economy.</p>
        <div className="h-[1px] w-full bg-gray-200 my-2" />
         </div>
      <div className="flex-1 flex flex-col justify-start items-left">
        <ServiceCard
          color="bg-[#2952E3]"
          title="TSC  académiques "
          icon={<FaGraduationCap fontSize={21} className="text-white" />}
          subtitle="TSC is a reliable, fundamental and long-term project based on academic values.
          ."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="TSC Exchange"
          icon={<GiCardExchange fontSize={21} className="text-white" />}
          subtitle="TSC token holders will receive a cyclical payout generated in the TSC exchange from token trading fees and crowdfunding.
          "
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="les nouvelles technologies"
          icon={<GrTechnology fontSize={21} className="text-white" />}
          subtitle="We created the TSC Academy to promote tokenization and educate about economics, finance and new technologies.."
        />
      </div>

    </div>
  </div>
);

export default Services;
