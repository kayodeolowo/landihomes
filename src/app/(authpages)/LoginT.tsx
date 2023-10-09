import React, { useState, ChangeEvent } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/userSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/Styles/Container';
import { Card } from '@/components/Styles/Card';
import { BlueBtn } from '@/components/Styles/BlueBtn';
import { Inputs } from '@/components/Styles/Inputs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



const LoginT: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        setLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email || '',
                    id: user.uid,
                    //token: user.accessToken || '',
                }));
                router.push('/properties');
                toast.success(`Welcome back, ${user.email}!`);
            })
            .catch(error => {
                console.error(error);
                toast.error('Login failed. Please check email or password.');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div>
          <Container>
            <Card>
            <div className='text-center mt-20'>
                <h1 className='font-bold pt-4 text-2xl'> Welcome Back </h1>
                <p className='text-sm font-semibold'>
                    Don’t have an account?{' '}
                    <Link href='/signup' className='underline font-bold text-primaryblue'>
                        Sign up
                    </Link>
                </p>
            </div>

            <div>
                <form className='text-sm font-semibold flex flex-col mt-6'>
                    <label> Email/Username </label>
                    <Inputs
                        type='email'
                        value={email}
                        placeholder='email'
                        onChange={handleEmailChange}
                    />

                    <label className='mt-4 font-semibold'> Password </label>
                    <Inputs
                        type='password'
                        value={password}
                        placeholder='password'
                        onChange={handlePasswordChange}
                    />
                </form>
            </div>

            <div>
            <BlueBtn className='mt-4 text-sm text-black' onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Please wait...' : 'Sign In'}
                    </BlueBtn>
                {/* Add your Google sign-in button here */}
                <p className='text-sm text-center mt-2 pb-10'> By signing in, you agree to our Terms of Use and Privacy Policy </p>
            </div>
            <ToastContainer />
      
            </Card>
          </Container>
        </div>
    );
}

export default LoginT;
