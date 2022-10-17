const username = `user-${Math.ceil(Math.random() * 10000000)}`;
const email = `${username}@example.org`;
const password = 'password12345';

const assertLoggedIn = () => {
    // cy.getCookie('nhostRefreshToken').should('exist');
    cy.wait(500);
    cy.t('navbar:user:btn').click();
    cy.wait(500);
    cy.t('usermenu:current-user:txt').should('contain.text', username);
};

const assertLoggedOut = () => {
    // cy.getCookie('nhostRefreshToken').should('not.exist');
    cy.wait(500);
    cy.t('navbar:btn:login').should('be.visible');
};

describe('auth flow', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('registration', () => {
        assertLoggedOut();

        cy.t('navbar:btn:register').click();

        cy.t('in:name').type(username);
        cy.t('in:email').type(email);
        cy.t('in:password').type(password);
        cy.t('cb:consent').check();
        cy.wait(1000);
        cy.t('btn:submit').click();

        cy.wait(1000);

        // Find verification email and link
        cy.mhGetMailsBySubject('Activate your account on Reshared.org', 1)
            .mhFirst()
            .mhGetBody()
            .decodeQuotedPrintable()
            .then((body) => {
                // Find activation link
                const match = /(https?:\/\/.*?)\s/.exec(body);
                const link = match?.[1];

                if (!link) {
                    throw new Error('Link not found in activation email');
                }

                cy.visit(link);
            });

        assertLoggedIn();
    });

    it('log in success', () => {
        assertLoggedOut();

        cy.t('navbar:btn:login').click();

        cy.t('email:in').type(email);
        cy.t('password:in').type(password);
        cy.t('submit:btn').click();

        cy.url().should('contain', '/home');

        assertLoggedIn();
    });

    it('log in fail', () => {
        cy.t('navbar:btn:login').click();

        cy.t('email:in').type('wrong@wrong.com');
        cy.t('password:in').type('wrong');
        cy.t('submit:btn').click();

        cy.t('error:alert').should('contain.text', 'Incorrect email or password');

        assertLoggedOut();
    });

    it('reset password', () => {
        cy.t('navbar:btn:login').click();

        cy.t('forgot:btn').click();

        cy.url().should('contain', '/reset-password');

        cy.wait(500);
        cy.t('email:in').type(email);
        cy.t('submit:btn').click();

        cy.t('success:alert').should('be.visible');

        cy.mhGetMailsBySubject('Reset your password on Reshared.org', 1)
            .mhFirst()
            .mhGetBody()
            .decodeQuotedPrintable()
            .then((body) => {
                // Find activation link
                const match = /(https?:\/\/.*?)\s/.exec(body);
                const link = match?.[1];

                if (!link) {
                    throw new Error('Link not found in reset password email');
                }

                cy.visit(link);
            });

        cy.url().should('contain', '/settings');

        cy.waitRequest('graphql');

        cy.wait(1000);
        cy.t('password:editable', 'edit:btn').click();
        cy.t('password:editable', 'value:in').type(`${password}!`);
        cy.t('password:editable', 'save:btn').click();

        assertLoggedIn();
    });

    it('log in with new password', () => {
        assertLoggedOut();

        cy.t('navbar:btn:login').click();

        cy.t('email:in').type(email);
        cy.t('password:in').type(`${password}!`);
        cy.t('submit:btn').click();

        cy.url().should('contain', '/home');

        assertLoggedIn();
    });
});

export {};
