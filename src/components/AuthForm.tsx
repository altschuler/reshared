import React, { useState } from 'react';
import { RegisterForm } from './dialogs/auth/RegisterForm';
import { LoginForm } from './dialogs/auth/LoginForm';

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
                <RegisterForm
                    submitLabel={props.registerSubmitLabel}
                    onLogin={() => setShowRegister(false)}
                />
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
