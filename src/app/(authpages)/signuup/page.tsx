
import React from 'react';
import  Link  from 'next/link';
import ClientSignUpFormWrapper from '../ClientSignUpFormWrapper';

const RegisterPage = () => {
  return (
    <div>
       <h1>Register</h1>
       <ClientSignUpFormWrapper/>
       <p>Already have an account? <Link href="/login">Sign in</Link></p>
    </div>
  )
}

export default RegisterPage