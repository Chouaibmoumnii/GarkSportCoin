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
        



const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[200px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

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

const Exchange= () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center gradient-bg-about pt-14">
  <div className="flex mf:flex-row flex-col items-start justify-between md:p-1 py-12 px-4 pt-10">
    <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 pt-7">
         
          <h1 className="text-center text-3xl sm:text-5xl text-white text-gradient py-1">
            Exchange GSC Token 
          </h1>
         <br />
     <div className="flex-1 flex flex-col justify-start items-start  pl-5 pr-8">
       <div className="p-5 w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="amount" type="number" handleChange={handleChange} />
            
            <Input placeholder="Amount (TSC)" name="amount" type="number" handleChange={handleChange} />
           

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Exchange
                </button>
              )}
         </div>
       </div>
    </div>
       
    </div>
    </div>
     
  );
};

export default Exchange;
