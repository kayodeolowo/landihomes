"use client"
import { Container } from "@/components/Styles/Container";
import { reservecollection } from "../../../firebase/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react"
import { PropertyCardProps } from "@/types/reserves";
import PropertyCard from "@/components/cards/PropertyCard";


const Properties = () => {

  const LoadingScreen = () => {
    return <div>Loading...</div>;
  };

  const [properties, setProperties] = useState<PropertyCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(reservecollection, (snapshot:
        QuerySnapshot<DocumentData>) => {
        setProperties(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              country: 'Some Country',
              ...doc.data(),
            };
          })
        );
        setLoading(false);
      }),

    []
  );

  console.log(properties, 'hotels');

  return (
    <Container>
      <div className=" ">
        {loading ? (
          <LoadingScreen />
        ) : properties && properties.length ? (
          <div className="sm:flex sm:flex-row space-y-4 sm:space-y-0 justify-between gap-5 sm:flex-wrap">
            {properties?.map((properties) => (
              <PropertyCard key={properties.id} reserve={properties} />
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