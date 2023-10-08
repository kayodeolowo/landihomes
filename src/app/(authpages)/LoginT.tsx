import React from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import Form from "../../components/Form";
import { useDispatch } from 'react-redux';
import {setUser} from '../../redux/features/userSlice'
import { useRouter } from 'next/navigation';

const LoginT: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                router.push('/properties');
            })
            .catch(console.error);
    };

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    );
}

export default LoginT;
