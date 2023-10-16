"use client"
import React from 'react'
import { withAuth } from '../../../redux/withAuth'


const Bookings: React.FC = () => {
  return (
    <div>
     <h1> hello </h1>
    </div>
  )
}

export default withAuth({Component:Bookings})
