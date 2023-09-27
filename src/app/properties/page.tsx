"use client"
import { Container } from "@/components/Styles/Container";
import { reservecollection } from "@/lib/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { BsTextarea } from "react-icons/bs";
import { CiLocationOn } from 'react-icons/ci'
import {FaBath, FaBed} from 'react-icons/fa'
import React, {useEffect, useState} from "react"
import { NewReserveType } from "@/types/reserves";

const Properties = () => {

  const [reserve, setReserve]  =  useState <NewReserveType[]>([]);

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
    }),
    
   []
  );
 
  console.log(reserve, 'hotels');
  return <Container>

    <div className=" sm:flex sm:flex-row space-y-4 sm:space-y-0 gap-10  sm:flex-wrap ">

      {reserve && reserve.length ? (
        <div>
          {
            reserve?.map((reserve)=>(
              <div key={reserve.id} className="h-[18rem] sm:w-[15rem] min-w-[15rem] max-w-[18rem]  w-[95%] mx-auto sm:mx-0 shadow-lg rounded-b-lg ">
              <img src="./images/house.png" alt="apartments" className="h-[9rem] w-full rounded-t-xl" />
              <div className="pt-4 px-4 bg-white rounded-b-xl">
                  <p className="">$23,000 </p>
                  <p> {reserve.country} </p>
                    <div className="flex flex-row items-center">
                      <CiLocationOn />
                      <p className="text-xs"> Thornridge Cir. Shiloh, Hawaii 81223 </p>
    
    
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
            ))
          }
          </div>
      ): (
        <h1> no rooms </h1>
      )}
     

   
     
      
    </div>
  </Container>;
};

export default Properties;
