import React, { useState } from 'react';

import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoSearchOutline } from 'react-icons/io5';
import { BiMicrophone } from 'react-icons/bi';
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from 'react-icons/md';
import { TbBrandSublimeText } from 'react-icons/tb';
import 'animate.css';

export default function HeaderAndSideBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [focused, setFocused] = useState(false);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  //const sideBarStyle = showSideBar ? `"teste"` : `"test2e"`;
  console.log(showSideBar);
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleClick = () => {
    console.log('handleclick');
  };

  return (
    <div className="flex-nowrap h-screen bg-white">
      <div className="bg-black border-b w-full shadow-sm stick-top-0 z-40 flex">
        <div className=" flex items-center max-h-12">
          <div className="ml-4">
            <HiOutlineBars3
              onClick={() => setShowSideBar(!showSideBar)}
              className="w-9 h-9 text-white px-1 py-1 border-black rounded-full  cursor-pointer hover:bg-slate-800"
            />
          </div>
          <img
            src="https://www.gstatic.com/youtube/img/promos/growth/84c26ef1008ac1dfc1585d1eb1ae49d0cc38cfc75b2a203f98f6213ca02e4003_122x56.webp"
            alt="logo"
            className="top-0 ml-2 w-36 h-20 text-white px-1 py-1 cursor-pointer"
          />
          <div className="input-div space-x-1 relative">
            <input
              className="ml-28 h-10 w-[545px] text-white bg-[#1a1919] border rounded-l-full px-4 border-[#464444] focus:border-blue-700 focus:outline-none md:w-98"
              type="text"
              placeholder="Pesquisar"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <div className="absolute inset-0 opacity-0 pointer-events-none ">
              <div className="absolute inset-0 items-center">
                {focused && (
                  <IoSearchOutline
                    className="ml-16 w-[60px] h-[40px] p-[10px] bg-[#1a1919] text-[#e7e5e5] border border-blue-700 outline-none
              rounded-l-full border-r-0 "
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <IoSearchOutline className="w-16 h-[40px] p-2 bg-[#242323] text-[#e7e5e5] border border-[#464444] rounded-r-full cursor-pointer" />
          </div>
          <div className="ml-2 ">
            <BiMicrophone className="w-8 h-7 bg-[#242323] text-white rounded-full cursor-pointer" />
          </div>
        </div>
        <div className="bell and create video"></div>
        <div className="icon-of-user-img w-8 h-8 absolute top-[7px] right-8 ">
          <button
            className="rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            onClick={handleClick}
          >
            <img
              src="https://yt3.ggpht.com/yti/AHXOFjUQ_6XECnBByA07fcSBM6d_raBll_uoGE7iW6zYFQ=s88-c-k-c0x00ffffff-no-rj-mo"
              alt=""
              className="rounded-full "
            />
          </button>
        </div>
      </div>
      <div className="h-[100%] absolute top-12 w-[6%] bg-black">
        <ul>
          <li className="cursor-pointer rounded-[12px] w-full py-5 h-20 hover:bg-[#242323]">
            <MdHomeFilled className="w-full h-7  text-white" />
            <p className="text-white text-center mt-1 text-[10px]">Início</p>
          </li>
          <li className="cursor-pointer rounded-[12px] w-full py-5 h-20 hover:bg-[#242323]">
            <TbBrandSublimeText className="w-full h-7  text-white" />
            <p className="text-white text-center mt-1 text-[10px]">Shorts</p>
          </li>
          <li className="cursor-pointer rounded-[12px] w-full py-5 h-20 hover:bg-[#242323]">
            <MdOutlineSubscriptions className="w-full h-7  text-white" />
            <p className="text-white  text-center mt-1 text-[10px]">
              Inscrições
            </p>
          </li>
          <li className="cursor-pointer rounded-[12px] w-full py-5 h-20 hover:bg-[#242323]">
            <MdOutlineVideoLibrary className="w-full h-7 text-white" />
            <p className="text-white  text-center mt-1 text-[10px]">
              Biblioteca
            </p>
          </li>
        </ul>
      </div>
      {showSideBar ? (
        <div className="animate__animated animate__slideInLeft animate__fast h-[100%] absolute top-0 flex w-[19%] bg-black flex-nowrap">
          <div className="ml-4">
            <HiOutlineBars3
              onClick={() => setShowSideBar(!showSideBar)}
              className="w-9 h-9 text-white px-1 py-1 border-black rounded-full  cursor-pointer hover:bg-slate-800"
            />
          </div>
          <img
            src="https://www.gstatic.com/youtube/img/promos/growth/84c26ef1008ac1dfc1585d1eb1ae49d0cc38cfc75b2a203f98f6213ca02e4003_122x56.webp"
            alt="logo"
            className="top-0 ml-2 w-36 h-20 text-white px-1 py-1 cursor-pointer"
          />{' '}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
