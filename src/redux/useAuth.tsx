import { useSelector } from 'react-redux';

export function useAuth() {
    const user = useSelector((state: { user: { email: string, token: string, id: string } }) => state.user);

    let email: string | null = user.email;
    let token: string | null = user.token;
    let id: string | null = user.id;

    // Check local storage if user is not in Redux state
    if (typeof window !== 'undefined') {
        if (!token && window.localStorage.getItem('authToken')) {
            token = window.localStorage.getItem('authToken')!;
            email = window.localStorage.getItem('authEmail')!;
            // id = window.localStorage.getItem('authId')!;
        }
    }

    return {
        isAuth: !!token,
        email,
        token,
        id,
    };
}
