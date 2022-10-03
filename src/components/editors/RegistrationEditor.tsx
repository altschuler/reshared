import { Alert, Button, Checkbox, Form, Input, Space, Typography } from 'antd';
import Joi from 'joi';
import Link from 'next/link';
import { useCallback } from 'react';
import { urlFor } from '../../utils/urls';
import { createUseEditor, EditorState } from './AbstractEditor';
// import { getProviders, SessionProvider, signIn } from 'next-auth/client';
import { useSignUpEmailPassword } from '@nhost/react';
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

    const handleSubmit = useCallback(() => state.submit() && onSubmit(state), [onSubmit, state]);

    return (
        <div>
            <Form hideRequiredMark>
                <Form.Item extra="Name as it appears to other users" {...state.ant('name')}>
                    <Input
                        data-cy="in:name"
                        placeholder="Name"
                        value={present.name}
                        onChange={(e) => state.update({ name: e.target.value })}
                    />
                </Form.Item>

                <Form.Item
                    extra="You will never ever receive spam from Reshared!"
                    {...state.ant('email')}>
                    <Input
                        data-cy="in:email"
                        placeholder="Email"
                        value={present.email}
                        onChange={(e) => state.update({ email: e.target.value })}
                    />
                </Form.Item>

                <Form.Item extra="Minimum 8 characters" {...state.ant('password')}>
                    <Input.Password
                        data-cy="in:password"
                        placeholder="Password"
                        value={present.password}
                        onChange={(e) => state.update({ password: e.target.value })}
                    />
                </Form.Item>

                <Form.Item {...state.ant('consent')}>
                    <Checkbox
                        data-cy="cb:consent"
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
                        <Button
                            data-cy="btn:submit"
                            type="primary"
                            loading={loading}
                            onClick={handleSubmit}>
                            {props.submitLabel || 'Register'}
                        </Button>

                        <Typography.Text>
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

            {/*<Space>*/}
            {/*    {values(providers)*/}
            {/*        .filter((p) => p.name !== 'credentials')*/}
            {/*        .map((provider) => (*/}
            {/*            <Button key={provider.name} onClick={() => signIn(provider.id)}>*/}
            {/*                {provider.name}*/}
            {/*            </Button>*/}
            {/*        ))}*/}
            {/*</Space>*/}
        </div>
    );
};

export const useRegistrationEditor = createUseEditor(makeEditorRegistration(), registrationSchema);
export const toCredentialsInput = (state: RegistrationEditorState) => ({
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
    const { signUpEmailPassword, isLoading, isSuccess, needsEmailVerification, isError, error } =
        useSignUpEmailPassword();

    const handleRegister = useCallback(
        (state: RegistrationEditorState) => {
            const input = toCredentialsInput(state);
            signUpEmailPassword(input.email!, input.password, { displayName: input.name });
        },
        [signUpEmailPassword],
    );

    if (needsEmailVerification) {
        router.push(urlFor.auth.verify(state.present.email));
    }

    if (isSuccess) {
        router.push(urlFor.home());
        return null;
    }

    return (
        <div>
            {needsEmailVerification && (
                <Alert type="info" message="An email has been sent to verify your email" />
            )}
            <RegistrationEditor
                error={error?.message}
                loading={isLoading}
                onLogin={props.onLogin}
                onSubmit={handleRegister}
                state={state}
            />
        </div>
    );
};
