import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

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
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between  md:p-20 py-5 px-4 ">


      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain confidentiality and maintain the quality of our products
          "
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="TSC allows you to create your own token and manage its uses on the TSC Exchange"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="The TSC token functions as a central and reference currency. By staking TSC,
          le titulaire peut bénéficier de parachutages pour les utilisateurs de Student Coin."
        />
      </div>
      <div className="flex-1 flex flex-col justify-start items-start  pl-10">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient  ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base ">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer

        </p>
        <div className="h-[1px] w-full bg-gray-200 my-2" />
      </div>

    </div>

  </div>

);

export default Services;
