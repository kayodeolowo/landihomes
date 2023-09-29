"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { firestore } from "@/lib/controller";
import { doc, getDoc } from 'firebase/firestore';
import { Container } from '@/components/Styles/Container';
import { NewReserveType } from "@/types/reserves";
import DetailsCard from '@/components/cards/DetailsCard';

const Details = () => {
    const { id } = useParams();
    const getReserve = doc(firestore, `reserve/${id}`);
    const [isLoading, setIsLoading] = useState(false);
    const [reserve, setReserve] = useState<NewReserveType | null>(null);

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
                console.log("No such document");
            }
        };
        fetchReserveData();
    }, []);

    return (
        <Container>
            <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    reserve && <DetailsCard reserve={reserve} />
                )}
            </div>
        </Container>
    )
}

export default Details;

