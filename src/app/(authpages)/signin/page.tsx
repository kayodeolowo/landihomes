"use client"
import React from 'react';
import LoginT from '@/app/(authpages)/LoginT';
import { Providers } from '@/redux/provider';



const Signin = () => {
  return (
    <Providers>
      <LoginT/>
    </Providers>
  )
}

export default Signin