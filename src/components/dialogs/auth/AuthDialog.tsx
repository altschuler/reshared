import { useRegisterUserMutation } from '../../../generated/graphql';
import { Button, Modal } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

interface AuthDialogProps {
    startOnRegister?: boolean;
    visible: boolean;
    onClose: () => any;
}

export const AuthDialog = (props: AuthDialogProps) => {
    const { visible } = props;
    const router = useRouter();
    const [showRegister, setShowRegister] = useState(props.startOnRegister);

    return (
        <Modal
            visible={visible}
            title={showRegister ? 'Register' : 'Login'}
            footer={null}
            onCancel={props.onClose}>
            {showRegister ? (
                <RegisterForm onLogin={() => setShowRegister(false)} />
            ) : (
                <LoginForm onRegister={() => setShowRegister(true)} />
            )}
        </Modal>
    );
};
