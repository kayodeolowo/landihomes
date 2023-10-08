import { getAuth, createUserWithEmailAndPassword, User } from "firebase/auth";
import Form from "../../components/Form";
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/userSlice';
import { useRouter } from 'next/navigation';

interface SignUpProps {}

const SignUpT: React.FC<SignUpProps> = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }: { user: User }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid, // Assuming user.id is the unique identifier
                    token: user.accessToken,
                }));
                router.push('/properties');
            })
            .catch(console.error);
    };

    return (
        <Form
            title='register'
            handleClick={handleRegister}
        />
    );
};

export default SignUpT;
