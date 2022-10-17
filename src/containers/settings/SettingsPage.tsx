import { useNhostClient } from '@nhost/react';
import { Alert, Button, Form, Input, List, message, Modal, Typography } from 'antd';
import { isEmpty } from 'lodash-es';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { EditableInput } from '../../components/EditableInput';
import { ImageInput } from '../../components/forms/ImageInput';
import {
    FileUploadCardFragment,
    Group_Role_Enum,
    useDeleteAccountMutation,
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

    const makeChange = async (name: string, updater: () => Promise<any>) => {
        if (!auth.user) {
            return;
        }

        updater()
            .then(() => message.success(`Updated ${name}`))
            .catch((err) =>
                Modal.error({ title: `Failed to update ${name}`, content: err.message }),
            );
    };

    const handleChangeName = (newName: string) =>
        makeChange('name', () =>
            updateUser({ variables: { userId: auth.user!.id, input: { displayName: newName } } }),
        );

    const handleChangeEmail = (newEmail: string) =>
        makeChange('email', () =>
            nhost.auth.changeEmail({ newEmail, options: { redirectTo: urlFor.user.settings() } }),
        );

    const handleChangePassword = (newPassword: string) =>
        makeChange('password', () => nhost.auth.changePassword({ newPassword }));

    const handleAvatarChange = (file: FileUploadCardFragment) =>
        makeChange('avatar', () =>
            updateProfile({
                variables: { userId: auth.user!.id, input: { avatar_id: file?.id || null } },
            }),
        );

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

            <Typography.Title type="danger" level={5}>
                Danger zone
            </Typography.Title>
            <DeleteAccountButton />
        </PageLayout>
    );
};

const DeleteAccountButton = () => {
    const auth = useAuth();
    const router = useRouter();
    const nhost = useNhostClient();
    const [open, setOpen] = useState(false);
    const [confirmText, setConfirmText] = useState('');

    const [remove, mutation] = useDeleteAccountMutation({
        context: { headers: { 'x-hasura-role': 'me' } },
    });

    const handleDelete = () => {
        remove({ variables: { id: auth.user!.id } })
            .then((res) => {
                if (!res.errors && res.data?.deleteAccount) {
                    message.success('Your account has been deleted');
                    nhost.auth.signOut({ all: true }).then(() => router.push(urlFor.auth.logout()));
                }
            })
            .catch((err) => console.log(err));
    };

    const handleCancel = () => {
        setOpen(false);
        // setConfirmText('')
    };

    const ownerNonEmptyGroups = auth.user?.memberships.filter(
        (m) =>
            m.role === Group_Role_Enum.Owner &&
            (m.group.memberships_aggregate.aggregate?.count || 0) > 1,
    );

    // Not allowed to delete account as long as you have non-empty owned groups
    const deleteBlocked = !isEmpty(ownerNonEmptyGroups);
    const confirmed = confirmText === auth.user?.email;

    return (
        <div>
            <Button
                danger
                size="small"
                type="primary"
                data-cy="delete-account:btn"
                onClick={() => setOpen(true)}>
                Delete account
            </Button>
            <Modal
                title="Delete account"
                open={open}
                onOk={handleDelete}
                okText="Delete my account permanently"
                okButtonProps={{
                    disabled: deleteBlocked || !confirmed,
                    type: 'primary',
                    ...({ ['data-cy']: 'delete-account:confirm:btn' } as any),
                }}
                okType="danger"
                confirmLoading={mutation.loading}
                onCancel={handleCancel}>
                {mutation.error && <Alert type="error" message={mutation.error.message} />}

                {!deleteBlocked && (
                    <>
                        <Typography.Paragraph>
                            Are you absolutely sure that you want to delete your account{' '}
                            <strong>permanently</strong>? It <strong>cannot be undone</strong> and
                            all your data will be immediately deleted forever.
                        </Typography.Paragraph>

                        <Typography.Paragraph>
                            Please enter your email to confirm.
                        </Typography.Paragraph>

                        <Input
                            data-cy="delete-account:email:in"
                            value={confirmText}
                            onChange={(e) => setConfirmText(e.target.value)}
                            placeholder="Email"
                        />
                    </>
                )}
                {deleteBlocked && (
                    <div data-cy="delete-account:blocked:txt">
                        <Typography.Paragraph>
                            You cannot delete your account because you are the owner of one or more
                            groups that have other members. Either transfer ownership to another
                            member, or delete them manually before deleting your account.
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            This restriction is in place to avoid accidentally deleting groups which
                            are in active use by others.
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            The groups that you are the current owner of and that have other members
                            are:
                        </Typography.Paragraph>
                        <List
                            bordered
                            data-cy="owned-groups:list"
                            itemLayout="horizontal"
                            dataSource={ownerNonEmptyGroups}
                            renderItem={(g) => (
                                <List.Item
                                    actions={[
                                        <Link
                                            key="go-to-group"
                                            passHref
                                            href={urlFor.group.home(g.group)}>
                                            <Typography.Link data-cy="item:go-to-group:btn">
                                                Go to group
                                            </Typography.Link>
                                        </Link>,
                                    ]}>
                                    {g.group.name} ({g.group.memberships_aggregate.aggregate?.count}{' '}
                                    members)
                                </List.Item>
                            )}></List>
                    </div>
                )}
            </Modal>
        </div>
    );
};
