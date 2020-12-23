import { Modal } from 'antd';
import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { DialogProps } from '../DialogProvider';

interface AuthDialogProps extends DialogProps<void> {
    startOnRegister?: boolean;
}

export const AuthDialog = (props: AuthDialogProps) => {
    const { visible } = props;
    const [showRegister, setShowRegister] = useState(props.startOnRegister);

    return (
        <Modal
            visible={visible}
            title={showRegister ? 'Register' : 'Login'}
            footer={null}
            destroyOnClose
            onCancel={props.dispose}>
            {showRegister ? (
                <RegisterForm onLogin={() => setShowRegister(false)} />
            ) : (
                <LoginForm onRegister={() => setShowRegister(true)} />
            )}
        </Modal>
    );
};
