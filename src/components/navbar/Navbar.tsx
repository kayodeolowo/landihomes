"use client"
import { useState } from "react";
import Link from "next/link";
import {BsFillHouseCheckFill} from 'react-icons/bs'
import { Container } from "../Styles/Container";
import { BlueBtn } from "../Styles/BlueBtn";


export default function Header() {
  const [navbar, setNavbar] = useState<boolean>(false);


  const handleNav = () => {
    setNavbar(!navbar);
  };


  return (
    
     <Container className="">
     <div className="justify-between    md:items-center md:flex ">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <div className=' hover:cursor-pointer flex flex-row    items-center'>
                  <Link href='/'>
                  <h1 className=' text-lg md:text-[1.5rem]   font-semibold text-black flex items-center '> LandiHomes <span> <BsFillHouseCheckFill/> </span> </h1>
                  </Link>
                </div>


                  {/* Mobile menu icons to open and close menu */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-black rounded-md outline-none "
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                  }`}
              >

                <ul className=" -mt-10 md:-mt-0 py-2   items-center justify-center text-sm space-y-2  md:flex md:space-x-6 md:space-y-0">
                  <Link onClick={handleNav} href='/'>

                    <p className=" hover:text-primaryblue duration-300 ease-in  hover:border-b-2 hover:border-primarypurple hover:cursor-pointer font-semibold text-blue-700 " >Home</p>

                  </Link>

                  <Link onClick={handleNav} href='/properties'>
                    <p className=" hover:text-primaryblue mt-5 md:mt-0 duration-300 ease-in  hover:border-b-2 hover:border-primarypurple hover:cursor-pointer text-blue-700  font-semibold">
                    Properties
                    </p>
                  </Link>

                  <Link onClick={handleNav} href='/contact'>
                    <p className=" hover:text-primaryblue mt-5 md:mt-0 duration-300 ease-in  hover:border-b-2 hover:border-primarypurple hover:cursor-pointer text-blue-700  font-semibold">
                      Contact
                    </p>
                  </Link>

                   <Link href='/signin'>
                   <BlueBtn className="px-4">
                      signin
                    </BlueBtn>
                   </Link>
                 
                </ul>
              </div>
            </div>

          </div>
     </Container>
    
  );
}