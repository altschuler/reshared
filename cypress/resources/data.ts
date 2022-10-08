export const testData = {
    users: {
        alice: {
            email: 'alice@reshared.org',
            password: 'awdawd123123',
        },
        bob: {
            email: 'bob@reshared.org',
            password: 'awdawd123123',
        },
    },

    groups: {
        // Alice is an owner, Bob is a regular member
        one: {
            id: '24c2d6e1-04e1-42bc-9444-3cc5635242b7',
            shortId: 'swmWPzLRozcIaNz',
        },
    },
} as const;

export type TestUserName = keyof typeof testData['users'];
export type TestGroupName = keyof typeof testData['groups'];
