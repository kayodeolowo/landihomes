"use client"
import { Container } from "@/components/Styles/Container";
import { reservecollection } from "@/lib/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react"
import { NewReserveType } from "@/types/reserves";
import PropertyCard from "@/components/cards/PropertyCard";


const Properties = () => {

  const LoadingScreen = () => {
    return <div>Loading...</div>;
  };

  const [reserve, setReserve] = useState<NewReserveType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(reservecollection, (snapshot:
        QuerySnapshot<DocumentData>) => {
        setReserve(
          snapshot.docs.map((doc) => {
            return {
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

  return (
    <Container>
      <div className=" ">
        {loading ? (
          <LoadingScreen />
        ) : reserve && reserve.length ? (
          <div className="sm:flex sm:flex-row space-y-4 sm:space-y-0 justify-between gap-5 sm:flex-wrap">
            {reserve?.map((reserve) => (
              <PropertyCard key={reserve.id} reserve={reserve} />
            ))}
          </div>
        ) : (
          <h1>no rooms</h1>
        )}
      </div>
    </Container>
  );
};

export default Properties;