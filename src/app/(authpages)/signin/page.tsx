
import React from 'react';
import  Link  from 'next/link';
import LoginT from '@/app/(authpages)/LoginT';
import ClientLoginFormWrapper from '../ClientLoginFormWrapper';



const Signin = () => {
  return (
    <div>
       <h1>Login</h1>
       <ClientLoginFormWrapper/>
       <p>Or <Link href="/register">register</Link></p>
    </div>
  )
}

export default Signin