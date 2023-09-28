import React from 'react'
import  Link  from 'next/link';
import { Container } from '@/components/Styles/Container';
import { Card } from '@/components/Styles/Card';
import { Inputs } from '@/components/Styles/Inputs';
import { BlueBtn } from '@/components/Styles/BlueBtn';
import {FcGoogle} from 'react-icons/fc'

const Signup = () => {
  return (
    <Container>
      <Card>
        <div  className=''>
    
          <div className='text-center'>
            <h1 className='font-bold text-2xl pt-4'> Create a free account </h1>
            <p className='text-sm md:text-xs'>
              Already have an account?{' '}
              <Link href='/login' className='underline font-semibold text-primaryblue'>
                Login
              </Link>
            </p>
          </div>

          <div>
              <form className='text-sm md:text-xs flex flex-col mt-6'>
                 <div className='flex flex-col md:flex-row  justify-between '>

                    <div className='flex flex-col md:w-[48%]'>
                      <label> First Name</label>
                      <Inputs className='' placeholder='John'/>
                    </div>

                    <div className=' mt-2 md:mt-0 flex flex-col md:w-[48%]'>
                      <label> Last Name</label>
                      <Inputs className='' placeholder='Boyega'/>
                    </div>
                 </div>
                 
                 <label className='mt-4'> Email </label>
                  <Inputs placeholder='Boyega@moonrepublic.com'
                  type='email'/>

                 
              </form>
          </div>

          <div>
              <BlueBtn className='mt-4 text-sm md:text-xs'> Sign up </BlueBtn>
              <BlueBtn className='mt-2 text-sm md:text-xs border border-gray bg-transparent text-black flex  justify-center items-center space-x-2'> <span className='mr-1'> <FcGoogle/> </span> Sign in with Google  </BlueBtn>
              <p className='text-sm md:text-[0.65rem] text-center mt-2 pb-10'> By signing up, you agree to our Terms of Use and Privacy Policy </p>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default Signup
