import { Alert, Button, Checkbox, Divider, Form, Input, Space, Typography } from 'antd';
import { values } from 'lodash';
import { createUseEditor, EditorState } from './AbstractEditor';
import * as Joi from 'joi';
import { useCallback, useEffect, useState } from 'react';
import { urlFor } from '../../utils/urls';
import Link from 'next/link';
import { getProviders, SessionProvider, signIn } from 'next-auth/client';
import { CredentialsInput, useRegisterUserMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';

export const registrationSchema = Joi.object<EditorRegistration>({
    name: Joi.string().min(2).max(50).messages({
        'string.empty':
            "You need to provide a name that others will see. It doesn't have to be your real name if you prefer, but it makes it easier for others in your communities to recognize you",
        'string.min': 'Minimum 2 characters please',
        'string.max': "Maximum 50 characters please, you don't need to provide your entire name",
    }),
    email: Joi.string().email({ tlds: false }).messages({
        'string.empty': 'Email is required',
        'string.email': 'Seems like an invalid email address',
    }),
    password: Joi.string().min(8).max(100).messages({
        'string.empty': 'Password is required',
        'string.min': 'Must be at least 8 characters long',
        'string.max': 'Max 100 characters, that should be secure enough :)',
    }),
    // passwordRepeat: Joi.ref('password'),
    consent: Joi.boolean().valid(true).messages({
        'any.only': 'You must agree to this',
    }),
});

export interface EditorRegistration {
    name: string;
    email: string;
    password: string;
    consent: boolean;
}

export const makeEditorRegistration = (): EditorRegistration => ({
    name: '',
    email: '',
    password: '',
    consent: false,
});

export type RegistrationEditorState = EditorState<EditorRegistration>;

export interface RegistrationEditorProps {
    state: RegistrationEditorState;
    loading?: boolean;
    error?: string;
    submitLabel?: string;
    onSubmit: (state: RegistrationEditorState) => unknown;
    onLogin?: () => unknown;
}

export const RegistrationEditor = (props: RegistrationEditorProps) => {
    const { state, loading, error, submitLabel, onSubmit } = props;
    const { present } = state;
    const [providers, setProviders] = useState<{ [key: string]: SessionProvider }>({});

    useEffect(() => {
        if (!providers) {
            getProviders().then((r) => setProviders(r!));
        }
    }, [providers]);

    const handleSubmit = useCallback(() => state.submit() && onSubmit(state), [onSubmit, state]);

    return (
        <div>
            <Form hideRequiredMark>
                <Form.Item extra="Name as it appears to other users" {...state.ant('name')}>
                    <Input
                        placeholder="Name"
                        value={present.name}
                        onChange={(e) => state.update({ name: e.target.value })}
                    />
                </Form.Item>

                <Form.Item
                    extra="You will never ever receive spam from Reshared!"
                    {...state.ant('email')}>
                    <Input
                        placeholder="Email"
                        value={present.email}
                        onChange={(e) => state.update({ email: e.target.value })}
                    />
                </Form.Item>

                <Form.Item extra="Minimum 8 characters" {...state.ant('password')}>
                    <Input.Password
                        placeholder="Password"
                        value={present.password}
                        onChange={(e) => state.update({ password: e.target.value })}
                    />
                </Form.Item>

                <Form.Item {...state.ant('consent')}>
                    <Checkbox
                        checked={present.consent}
                        onChange={(e) => state.update({ consent: e.target.checked })}>
                        I agree to the{' '}
                        <Typography.Link
                            target="_blank"
                            rel="noreferrer"
                            href={urlFor.site.privacy(true)}>
                            privacy policy
                        </Typography.Link>{' '}
                        and{' '}
                        <Typography.Link
                            target="_blank"
                            rel="noreferrer"
                            href={urlFor.site.terms(true)}>
                            terms of service
                        </Typography.Link>
                        .
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Space>
                        <Button type="primary" loading={loading} onClick={handleSubmit}>
                            {props.submitLabel || 'Register'}
                        </Button>

                        <Typography.Text className="signup-text">
                            Already have an account?{' '}
                            {props.onLogin ? (
                                <Typography.Link onClick={props.onLogin}>Sign in</Typography.Link>
                            ) : (
                                <Link href={urlFor.auth.login()} passHref>
                                    <Typography.Link>Sign in</Typography.Link>
                                </Link>
                            )}{' '}
                            instead.
                        </Typography.Text>
                    </Space>
                </Form.Item>
                {error && <Alert message={error} type="error" />}
            </Form>

            <Divider>Other sign-up options</Divider>

            <Space>
                {values(providers)
                    .filter((p) => p.name !== 'credentials')
                    .map((provider) => (
                        <Button key={provider.name} onClick={() => signIn(provider.id)}>
                            {provider.name}
                        </Button>
                    ))}
            </Space>
        </div>
    );
};

export const useRegistrationEditor = createUseEditor(makeEditorRegistration(), registrationSchema);
export const toCredentialsInput = (state: RegistrationEditorState): CredentialsInput => ({
    name: state.present.name,
    email: state.present.email,
    password: state.present.password,
});

// Encapsulates the editor and state in a form, since it's always only used this way (ie no create/update)
export interface RegistrationFormProps {
    onLogin?: () => unknown;
}

export const RegistrationForm = (props: RegistrationFormProps) => {
    const router = useRouter();
    const state = useRegistrationEditor();
    const [register, registerMutation] = useRegisterUserMutation();

    const handleRegister = useCallback(
        (state: RegistrationEditorState) => {
            register({ variables: { input: toCredentialsInput(state) } })
                .then(() =>
                    signIn('credentials', {
                        email: state.present.email,
                        password: state.present.password,
                    }),
                )
                .then(() => {
                    state.reset();
                    return router.push(urlFor.home());
                })
                .catch(console.log);
        },
        [register, router],
    );

    return (
        <RegistrationEditor
            error={registerMutation.error?.message}
            loading={registerMutation.loading}
            onLogin={props.onLogin}
            onSubmit={handleRegister}
            state={state}
        />
    );
};
