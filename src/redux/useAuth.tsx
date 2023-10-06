import { useSelector } from 'react-redux';

export function useAuth() {
    const user = useSelector((state: { user: { email: string, token: string, id: string } }) => state.user);

    let email: string | null = user.email;
    let token: string | null = user.token;
    let id: string | null = user.id;

    // Check local storage if user is not in Redux state
    if (!token && localStorage.getItem('authToken')) {
        token = localStorage.getItem('authToken')!;
        email = localStorage.getItem('authEmail')!;
        // id = localStorage.getItem('authId')!;
    }

    return {
        isAuth: !!token,
        email,
        token,
        id,
    };
}
