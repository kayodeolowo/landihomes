"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { Container } from '@/components/Styles/Container';


const Profile = () => {
   
    const router = useRouter();
  
    const handleLogout = () => {
       
        localStorage.clear();
        router.push('/signin');
      };

  return (
    <Container>
      <div>
       <button onClick={handleLogout}>Log out</button>
    </div>
    </Container>
  )
}

export default Profile
