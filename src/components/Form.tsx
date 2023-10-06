"use client"
import React, { useState } from 'react';

interface FormProps {
    title: string;
    handleClick: (email: string, password: string) => void;
}

const Form: React.FC<FormProps> = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: any) => {
        setPass(e.target.value);
    }

    const handleSubmit = () => {
        handleClick(email, pass);
    }

    return (
        <div>
            <input
                type='email'
                value={email}
                placeholder='email'
                onChange={handleEmailChange}
            />
            <input
                type='password'
                value={pass}
                placeholder='password'
                onChange={handlePasswordChange}
            />
            <button onClick={handleSubmit}>{title}</button>
        </div>
    )
}

export default Form;
