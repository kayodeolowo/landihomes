import React from 'react';
import Form from "../../components/Form";
import { useDispatch } from 'react-redux';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {setUser} from '../../redux/features/userSlice'

const LoginT: React.FC = () => {
  
    const dispatch = useDispatch();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                     token: user.accesstoken,
                }));
                
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
