"use client"
import { Providers } from '@/redux/provider'
import React from 'react'
import SignUpT from './SignupT'

const ClientSignUpFormWrapper = () => {
    return (

        <Providers>
            <SignUpT />
        </Providers>

    )
}

export default ClientSignUpFormWrapper
