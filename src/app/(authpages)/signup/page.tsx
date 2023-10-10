
import React from 'react';
import { Providers } from '@/redux/provider';
import SignUpT from '../SignupT';

const RegisterPage = () => {
  return (
    <Providers>
      <SignUpT/>
    </Providers>
  )
}

export default RegisterPage