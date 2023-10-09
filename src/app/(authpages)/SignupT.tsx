import { getAuth, createUserWithEmailAndPassword, User } from "firebase/auth";
import Form from "../../components/Form";
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/userSlice';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent } from 'react';
import { Container } from '@/components/Styles/Container';
import { Card } from '@/components/Styles/Card';
import { BlueBtn } from '@/components/Styles/BlueBtn';
import { Inputs } from '@/components/Styles/Inputs';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

interface SignUpProps {}

const SignUpT: React.FC<SignUpProps> = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleRegister = (email: string, password: string) => {
        setLoading(true);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }: { user: User }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid, // Assuming user.id is the unique identifier
                    
                    //token: user.accessToken,
                }));
                router.push('/properties');
                toast.success('Signed up Successfully, Welcome');
            })
            .catch(error => {
                console.error(error);
                toast.error('SignUp failed. Email Already exist');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleRegisterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleRegister(email, password);
      };

    return (
        <div>
          <Container>
            <Card>
            <div className='text-center'>
                <h1 className='font-bold pt-4 text-2xl'> Welcome Back </h1>
                <p className='text-sm font-semibold'>
                    Have an account?{' '}
                    <Link href='/signin' className='underline font-bold text-primaryblue'>
                        Sign In
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
            <BlueBtn className='mt-4 text-sm text-black' onClick={handleRegisterClick} disabled={loading}>
                        {loading ? 'Please wait...' : 'Sign Up'}
                    </BlueBtn>
                {/* Add your Google sign-in button here */}
                <p className='text-sm text-center mt-2 pb-10'> By signing in, you agree to our Terms of Use and Privacy Policy </p>
            </div>
            <ToastContainer />
            </Card>
          </Container>
        </div>
    );
};

export default SignUpT;
