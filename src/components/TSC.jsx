import React, { useContext } from "react";
import { AiOutlineCaretUp } from "react-icons/ai";
import {FaGraduationCap} from "react-icons/fa";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import logo from "../../images/logo.png";
import coinbase from "../../images/coinbase.png";
import metamask from "../../images/metamask1.png";
import cryptocom from "../../images/cryptocom.png";
import binance from "../../images/binance.png";
import OIP from "../../images/OIP.png";




const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const TSC= () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <section id="send token">

    <div className="flex w-full justify-center items-center gradient-bg-about pt-14">
  <div className="flex mf:flex-row flex-col items-start justify-between md:p-1 py-12 px-4 pt-10">
    <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 pt-7">

          <h1 className="text-center text-3xl sm:text-5xl text-white text-gradient py-1">
            Send GSC Token
          </h1>
         <br />
     <div className="flex-1 flex flex-col justify-start items-start  pl-5 pr-8">
       <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (GSC)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
         </div>
       </div>
    </div>
    <div className="flex-1 flex flex-col justify-start items-start pr-10 pt-14">
  <h1 className="text-white text-3xl sm:text-4xl py-2 text-gradient">
    At supported platforms
  </h1>

  <h2 className="text-white text-1x sm:text-2xl py-2 text-gradient">
    To make your Transaction Easy & Simple
  </h2>

  <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
    The GSC Exchange is a modern and user-friendly platform for trading and crowdfunding
    with the primary aim to become the platform for crypto newcomers and experienced traders.
  </p>
  
  <div className="h-1 w-full bg-gray-200 my-2" />

  <div className="flex justify-center items-center space-x-4">
    <a href="#">
      <img src={logo} alt="logo" className="w-24" />
    </a>
    <a href="https://www.coinbase.com">
      <img src={coinbase} alt="coinbase" className="w-24" />
    </a>
    <a href="https://crypto.com/">
      <img src={cryptocom} alt="cryptocom" className="w-24" />
    </a>
    <a href="https://www.binance.com/fr">
      <img src={binance} alt="binance" className="w-24" />
    </a>
    <a>
      <img src={metamask} alt="metamask" className="w-24" />
    </a>
  </div>
</div>
</div>

    </div>
   </section>
  );
};

export default TSC;
