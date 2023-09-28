"use client"

import React , {useState,useEffect} from 'react'
import { useParams } from 'next/navigation';
import { firestore }  from "@/lib/controller";
import { doc, getDoc } from 'firebase/firestore';
import { Container } from '@/components/Styles/Container';
import { NewReserveType } from "@/types/reserves";

const Details = () => {
    const {id} = useParams();
    const getReserve = doc(firestore, `reserve/${id}` )
    const [isLoading, setIsLoading] = useState(false);
    const [reserve, setReserve] = useState <NewReserveType[]>([]);
  
    useEffect(() => {
      const fetchReserveData = async () => {
        setIsLoading(true);
        const docSnap = await getDoc(getReserve);
        if (docSnap.exists()) {
          const newReserveObj = {
            id: docSnap.id,
            ...docSnap.data(),
          };
          setReserve(newReserveObj);
          setIsLoading(false);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document");
        }
      };
      fetchReserveData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
       <Container>
         <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <h1>{reserve.country}</h1>
              <p>{reserve.description}</p>
            </div>
          )}
        </div>
       </Container>
  )
}

export default Details
