import React, { useState } from 'react';
import { LoginForm } from './dialogs/auth/LoginForm';
import { RegistrationForm } from './editors';

export interface AuthFormProps {
    startOnRegister?: boolean;
    loginSubmitLabel?: string;
    registerSubmitLabel?: string;
    callbackUrl?: string;
}

export const AuthForm = (props: AuthFormProps) => {
    const [showRegister, setShowRegister] = useState(props.startOnRegister);

    return (
        <div>
            {showRegister ? (
                <RegistrationForm onLogin={() => setShowRegister(false)} />
            ) : (
                <LoginForm
                    submitLabel={props.loginSubmitLabel}
                    onRegister={() => setShowRegister(true)}
                    callbackUrl={props.callbackUrl}
                />
            )}
        </div>
    );
};
