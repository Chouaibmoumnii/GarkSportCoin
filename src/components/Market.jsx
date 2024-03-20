import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineCaretUp } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";



import { AiOutlineCaretDown } from "react-icons/ai";




const Market = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin,litecoin"
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="market" className="w-full flex justify-center items-center gradient-bg-about">
    <div className="flex flex-col items-start justify-between md:p-1 py-12 px-4 max-w-screen-lg w-full">
      <h1 className="text-center text-3xl sm:text-5xl text-white text-gradient py-1">
        Market CryptoCoin
        </h1>
        <div className="flex flex-col w-full">
            {cryptoData.map((crypto, index) => (
            <div key={index} className="p-8 sm:w-150 w-full flex flex-col justify-start items-center mb-6 blue-glassmorphism">
                <div className="flex justify-between items-start w-full">
                    <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                        {crypto.symbol.toUpperCase() === 'BTC' && <FaBitcoin
                        fontSize={21} color="#fff" />}
                                                {crypto.symbol.toUpperCase() === 'ETH' && <FaEthereum
                        fontSize={21} color="#fff" />}
                                                {crypto.symbol.toUpperCase() === 'DOGE' && <SiDogecoin
                        fontSize={21} color="#fff" />}
                                                {crypto.symbol.toUpperCase() === 'LTC' && <SiLitecoin
                        fontSize={21} color="#fff" />}
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-lg font-bold">{crypto.name} ({crypto.symbol.toUpperCase()})</h1>
                        <h2 className="text-white text-sm">${crypto.current_price}</h2>
                    </div>
                    <div className={`flex items-center text-base font-semibold ${crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {crypto.price_change_percentage_24h >= 0 ? <AiOutlineCaretUp className="text-green mr-2" /> : <AiOutlineCaretDown className="text-red mr-2" />}
                        <p>{crypto.price_change_percentage_24h}%</p>
                    </div>
                    <div>
                        <button
                        type="button"
                        className="flex items-center bg-white text-black p-1 rounded-full hover:bg-gray-300"
                        >
                        <MdShowChart className="text-black mr-2" />
                        <a href={`https://coinmarketcap.com/currencies/${crypto.id}`} target="_blank" rel="noopener noreferrer" className="text-black font-semibold" >Trade</a>
                        </button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
</section>
  
  );
};

export default Market;

