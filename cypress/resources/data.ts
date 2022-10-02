export type TestUserName = 'alice' | 'bob';

export interface TestUser {
    email: string;
    password: string;
}

export interface TestData {
    users: {
        [P in TestUserName]: TestUser;
    };
}

export const testData: TestData = {
    users: {
        alice: {
            email: 'fnuller@reshared.org',
            password: 'awdawd123123',
        },
        bob: {
            email: 'anna@reshared.org',
            password: 'awdawd123123',
        },
    },
};
