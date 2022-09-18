import { useNhostClient } from '@nhost/react';
import { Form, message, Modal, Typography } from 'antd';
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
    const [updateUser, userMutation] = useUpdateUserMutation({
        context: { headers: { 'x-hasura-role': 'me' } },
    });
    const [updateProfile, profileMutation] = useUpdateUserProfileMutation({
        context: { headers: { 'x-hasura-role': 'me' } },
    });

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
                options: { redirectTo: urlFor.messages.emailChanged(true) },
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
            <Typography.Title level={5}>Profile</Typography.Title>
            <Typography.Paragraph italic>Publicly visible information.</Typography.Paragraph>

            {auth.user && (
                <Form layout="horizontal">
                    <Form.Item label="Name" help="Your name as it is shown to others">
                        <EditableInput
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
                        <EditableInput onSave={handleChangeEmail} defaultValue={auth.user.email} />
                    </Form.Item>

                    <Form.Item label="Password">
                        <EditableInput onSave={handleChangePassword} password defaultValue="" />
                    </Form.Item>
                </Form>
            )}
        </PageLayout>
    );
};
