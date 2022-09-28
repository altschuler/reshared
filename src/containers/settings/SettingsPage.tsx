import { useNhostClient } from '@nhost/react';
import { Alert, Form, message, Modal, Typography } from 'antd';
import { useRouter } from 'next/router';
import { EditableInput } from '../../components/EditableInput';
import { ImageInput } from '../../components/forms/ImageInput';
import {
    FileUploadCardFragment,
    useUpdateUserMutation,
    useUpdateUserProfileMutation,
} from '../../generated/graphql';
import { useAuth } from '../../utils/auth';
import { urlFor } from '../../utils/urls';
import { PageLayout } from '../root/PageLayout';

export const SettingsPage = () => {
    const auth = useAuth();
    const nhost = useNhostClient();
    const router = useRouter();

    const [updateUser, userMutation] = useUpdateUserMutation({
        context: { headers: { 'x-hasura-role': 'me' } },
    });
    const [updateProfile, profileMutation] = useUpdateUserProfileMutation({
        context: { headers: { 'x-hasura-role': 'me' } },
    });

    const isResetPasswordRedirect = router.query.type === 'passwordReset';
    const isEmailChange = router.query.type === 'emailConfirmChange';

    const handleChangeName = async (newName: string) => {
        if (!auth.user) {
            return;
        }
        try {
            const res = await updateUser({
                variables: { userId: auth.user.id, input: { displayName: newName } },
            });
            message.success('Name updated');
        } catch (err) {
            Modal.error({ title: 'Failed to update name', content: err.message });
            throw err;
        }
    };

    const handleChangeEmail = async (newEmail: string) => {
        try {
            const res = await nhost.auth.changeEmail({
                newEmail,
                options: { redirectTo: urlFor.user.settings() },
            });
            if (res.error) {
                throw res.error;
            }
            message.success('An email has been sent to verify your new email address.');
        } catch (err) {
            Modal.error({ title: 'Failed to change email', content: err.message });
            throw err;
        }
    };

    const handleChangePassword = async (newPassword: string) => {
        try {
            const res = await nhost.auth.changePassword({ newPassword });
            if (res.error) {
                throw res.error;
            } else {
                message.success('Your password has been changed');
            }
        } catch (err) {
            Modal.error({ title: 'Failed to change password', content: err.message });
            throw err;
        }
    };

    const handleAvatarChange = async (file: FileUploadCardFragment) => {
        if (!auth.user) {
            return;
        }
        try {
            const res = await updateProfile({
                variables: { userId: auth.user.id, input: { avatar_id: file?.id || null } },
            });

            if (res.errors) {
                throw res.errors[0];
            } else {
                message.success('Avatar updated');
            }
        } catch (err) {
            Modal.error({ title: 'Failed to set avatar', content: err.message });
            throw err;
        }
    };

    return (
        <PageLayout padded loading={auth.loading}>
            {isResetPasswordRedirect && (
                <Alert
                    showIcon
                    message="You have been logged in automatically"
                    description="You can change your password below."
                />
            )}

            {isEmailChange && (
                <Alert type="success" showIcon message="Your email has been verified" />
            )}

            <Typography.Title level={5}>Profile</Typography.Title>
            <Typography.Paragraph italic>Publicly visible information.</Typography.Paragraph>

            {auth.user && (
                <Form layout="horizontal">
                    <Form.Item label="Name" help="Your name as it is shown to others">
                        <EditableInput
                            dataCy="name:editable"
                            onSave={handleChangeName}
                            defaultValue={auth.user.displayName}
                        />
                    </Form.Item>

                    <Form.Item label="Avatar">
                        <ImageInput
                            value={auth.user.user_profile?.avatar || null}
                            onChange={handleAvatarChange}
                        />
                    </Form.Item>
                </Form>
            )}

            <Typography.Title level={5}>Account</Typography.Title>
            <Typography.Paragraph italic>Security and account information.</Typography.Paragraph>
            {auth.user && (
                <Form layout="horizontal">
                    <Form.Item label="Email">
                        <EditableInput
                            dataCy="email:editable"
                            onSave={handleChangeEmail}
                            defaultValue={auth.user.email}
                        />
                    </Form.Item>

                    <Form.Item label="Password">
                        <EditableInput
                            dataCy="password:editable"
                            onSave={handleChangePassword}
                            password
                        />
                    </Form.Item>
                </Form>
            )}
        </PageLayout>
    );
};
