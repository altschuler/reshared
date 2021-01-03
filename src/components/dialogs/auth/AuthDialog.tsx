import { Modal } from 'antd';
import { DialogProps } from '../DialogProvider';
import { AuthForm } from '../../AuthForm';

interface AuthDialogProps extends DialogProps<void> {
    startOnRegister?: boolean;
}

export const AuthDialog = (props: AuthDialogProps) => {
    const { visible } = props;

    return (
        <Modal
            visible={visible}
            title="Login or register"
            footer={null}
            destroyOnClose
            onCancel={props.dispose}>
            <AuthForm />
        </Modal>
    );
};
