import React, { useContext } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseCircleFill } from "react-icons/ri";
import logo from "../../images/logoGark.png";
import { TransactionContext } from "../context/TransactionContext";
import { BsWallet2 } from "react-icons/bs";
import { Link  } from 'react-scroll'

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const {connectWallet,currentAccount} = useContext(TransactionContext);


  return (
    <nav className="w-full flex md:justify-center justify-between items-center  ">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
      <li  className={`mx-6 cursor-pointer `}>
        <Link
           to="market"
           smooth={true}
           duration={1000}
            > Market</Link>
          </li>
        <li  className={`mx-6 cursor-pointer`}>
        <Link
           to="transaction"
           smooth={true}
           duration={1000}
            > Transaction</Link>
            </li>
        <li  className={`mx-6 cursor-pointer `}>
        <Link
           to="send token"
           smooth={true}
           duration={1000}
            >Send Token</Link>
            </li>
        <li  className={`mx-6 cursor-pointer `}>
        <a
            href='#'
            target='_blank'
            rel='noreferrer'
            >Wallets</a>
            </li>
        <li>
         {!currentAccount && ( <button
           type="button"
           onClick={connectWallet}
           className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"

          >

              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p> <BsWallet2 className="text-white ml-2" />
              </button>
              )}
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt3 fontSize={32} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <RiCloseCircleFill fontSize={32} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw]  h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <RiCloseCircleFill fontSize={32} onClick={() => setToggleMenu(false)} /></li>
              {!currentAccount && ( <button
           type="button"
           onClick={connectWallet}
           className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"

          >

              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p> <BsWallet2 className="text-white ml-2" />
              </button>
              )}
            {["Market", "Exchange", "Tutorials", "Wallets",].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
