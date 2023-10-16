"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/redux/useAuth';

interface WithAuthProps {
    Component: React.ComponentType<any>;
  }
  
  export const withAuth = ({ Component }: WithAuthProps) => {
    return (props: any) => {
      const { isAuth } = useAuth();
      const router = useRouter();
  
      useEffect(() => {
        if (!isAuth) {
          router.push('/signin');
        }
      }, [isAuth]);
  
      if (isAuth) {
        return <Component {...props} />;
      }
  
      return null;
    };
  };