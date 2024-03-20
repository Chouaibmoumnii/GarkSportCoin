import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import {FaUniversity} from "react-icons/fa";
import {FaGraduationCap} from "react-icons/fa";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import { AiOutlineCaretUp } from "react-icons/ai";
import iconCoin from "../../images/iconGSC.png";


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

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const refreshPage = ()=>{
    window.location.reload();
 }
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the country
          </h1><br></br>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Tunis GarkSportCoin.
          </p>


          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div><br/><br />
          <h1 className="text-center text-3xl sm:text-5xl text-white text-gradient py-1 pl-10">
          Buy  GSC token
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base pl-14">
           Easy & Simple  Directly to GSC Wallet
          </p>
          <div className="pl-20">

            <button
              type="button"

              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                <a href='https://coinmarketcap.com/'>
                Buy GarkSportCoin
                </a>
              </p>
            </button>

          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism hover:shadow-3xl ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                 
                  <img src={iconCoin} style={{width:"28px"}} />

                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                GarkSportCoin
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
             <div className="flex justify-between items-start ">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <img src={iconCoin} style={{width:"28px"}} />
                </div>
                 <h1   className="text-white pl-3 pt-1 pr-14"><b> GarkSportCoin (GSC)</b> </h1>

                <button
                  type="button"
                  className="flex flex-row justify-center items-center my-1 bg-[#2546bd] p-1 rounded-full cursor-pointer hover:bg-[#2546bd] "
                >
                  <AiOutlineCaretUp className="text-white mr-2" />
                  <p className="text-white text-base font-semibold">
                  +0.01%
                  </p>
                 </button>

              </div>
                  <h1   className="text-1x sm:text-5xl text-white text-gradient py-1 pt-5"><b>DT 1.1044</b> </h1>
                  <h1   className="text-20px sm:text-2xl text-white text-gradient py-1 pt-5 pl-4">
                     0,0000087 BTC <br></br>

                     0,0001100 ETH

                  </h1>
              <div>

                <h1   className=" flex justify-center items-center text-white   pt-12"><b> Market Cap</b> </h1>
                <p className="flex flex-row justify-center items-center my-1 bg-[#2546bd] p-1 rounded-full cursor-pointer border-[3px] border-[#3d4f7c]  "><b>DT 187500.00</b></p>
              </div>
              <div className="h-[1px] w-full bg-gray-200 my-2" />
                 <p className="text-white pb-7">*Data provided by coinmarketcap</p>
                <button
                  type="button"
                  onClick={refreshPage}
                  className="text-blue text-gradient  w-full mt-2 border-[3px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer "
                >
                  <b>
                  Actualiser
               </b>
                </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
