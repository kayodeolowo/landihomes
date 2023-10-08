"use client"
import { Providers } from '@/redux/provider'
import React from 'react'
import LoginT from './LoginT'
import SignUpT from './SignupT'

const ClientLoginFormWrapper = () => {
  return (
    <Providers>
        <LoginT/>
    </Providers>
  )
}

export default ClientLoginFormWrapper
