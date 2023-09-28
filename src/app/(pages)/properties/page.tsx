"use client"
import { Container } from "@/components/Styles/Container";
import { reservecollection } from "@/lib/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { BsTextarea } from "react-icons/bs";
import { CiLocationOn } from 'react-icons/ci'
import {FaBath, FaBed} from 'react-icons/fa'
import React, {useEffect, useState} from "react"
import { NewReserveType } from "@/types/reserves";
import Link from "next/link";


const Properties = () => {

  const LoadingScreen = () => {
    return <div>Loading...</div>;
  };

  const [reserve, setReserve]  =  useState <NewReserveType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => 
    onSnapshot(reservecollection, (snapshot:
      QuerySnapshot<DocumentData>) => {
     setReserve(
      snapshot.docs.map((doc)=>{
        return{
          id: doc.id,
          ...doc.data(),
        
     };
      })
     );
     setLoading(false);
    }),
    
   []
  );
 
  console.log(reserve, 'hotels');
  return <Container>

    <div className="  ">

    {loading ? (
    <LoadingScreen />
  ) : reserve && reserve.length ? (
    <div className="sm:flex sm:flex-row space-y-4 sm:space-y-0 justify-between gap-5  sm:flex-wrap">
      {reserve?.map((reserve) => (
    <div>
        <Link href={`/detailsreserve/${reserve.id}`} key={reserve.id}>
        <div  className="h-[18rem] sm:w-[14rem] min-w-[15rem] max-w-[18rem] hover:cursor-pointer hover:shadow-2xl w-[95%] mx-auto sm:mx-0 shadow-md rounded-b-lg ">
              <img src="./images/house.png" alt="apartments" className="h-[9rem] w-full rounded-t-xl" />
              <div className="pt-4 px-2 bg-white rounded-b-xl">
                  <p className="">$23,000 </p>
                  <p> {reserve.country} </p>
                    <div className="flex text-xs flex-row items-center">
                      <CiLocationOn />
                      <p className=""> Thornridge Shiloh, Hawaii 81223 </p>
    
    
                    </div>
                       <hr className="mt-4 text-red-400  bg-red-400 " />
    
                    <div className="mt-4 flex justify-between items-center pb-4">
                        <div className="flex space-x-1 flex-row items-center">
                            <FaBed/>
                            <p className="text-xs"> 3 beds </p>
                        </div>
    
                        <div className="flex space-x-1 flex-row items-center">
                            <FaBath/>
                            <p className="text-xs"> 3 beds </p>
                        </div>
    
                        <div className="flex space-x-1 flex-row items-center">
                            <BsTextarea/>
                            <p className="text-xs"> 3 beds </p>
                        </div>
    
                    </div>

                    
              </div>
          </div>
        </Link>
      </div>
      ))}
    </div>
  ) : (
    <h1>no rooms</h1>
  )}
</div>
  </Container>;
};

export default Properties;
