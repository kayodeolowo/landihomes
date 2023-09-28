import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/Styles/Container';
import { Card } from '@/components/Styles/Card';
import { Inputs } from '@/components/Styles/Inputs';
import {FcGoogle} from 'react-icons/fc'
import { BlueBtn } from '@/components/Styles/BlueBtn';

const Login = () => {
  return (
    <Container>
      <Card>
        <div  className=''>
          <div className='text-center'>
            {/* <img src='./images/logo.png' alt='logo'
              className='w-[2.3rem] mx-auto pt-8' /> */}
            <h1 className='font-bold pt-4 text-2xl'> Welcome Back </h1>
            <p className='text-sm  font-semibold'>
              Don’t have an account?{' '}
              <Link href='/signup' className='underline font-bold text-primaryblue'>
                Sign up
              </Link>
            </p>
          </div>

          <div>
              <form className='text-sm font-semibold flex flex-col mt-6'>
                  <label> Email/Username </label>
                  <Inputs placeholder='Boyega@moonrepublic.com'
                  type='email'/>

                  <label className='mt-4 font-semibold'> Password </label>
                  <Inputs placeholder='*************'
                  type='password' />
              </form>
          </div>

          <div>
              <BlueBtn className='mt-4 text-sm '> Sign in </BlueBtn>
              <BlueBtn className='mt-2 border text-sm  border-gray bg-transparent text-black flex  justify-center items-center space-x-2'> <span className='mr-1'> <FcGoogle/> </span> Sign in with Google  </BlueBtn>
              <p className='text-sm  text-center mt-2 pb-10'> By signing in, you agree to our Terms of Use and Privacy Policy </p>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default Login
