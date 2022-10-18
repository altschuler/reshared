describe('account deletion', () => {
    const username = `user-${Math.ceil(Math.random() * 10000000)}`;
    const email = `${username}@example.org`;
    const password = 'password12345';

    const groupName = `group-${Math.ceil(Math.random() * 10000000)}`;

    beforeEach(() => {
        cy.visit('/');
        cy.interceptRequests();
    });

    it('register and create group', () => {
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
    });

    it('create group with other member', () => {
        cy.loginCustom(email, password, true);

        cy.t('navbar:my-groups:btn').click();

        cy.url().should('match', /\/groups$/);

        cy.t('create-group:btn').click();

        cy.t('name:in').type(groupName);

        cy.wait(300);

        cy.t('public:cb').check();

        cy.wait(300);

        cy.t('submit:btn').click();

        cy.waitRequest('graphql');

        cy.url().should('match', /\/groups\//);

        cy.wait(2000);

        // Alice joins
        cy.login('alice', true);

        cy.t('navbar:search:in').type(`${groupName}{enter}`);
        cy.t('search:sidebar:groups:btn').click();
        cy.t('search:group-results:item', 'title').click();

        cy.t('group-header:join:btn').click();
    });

    it('delete account with active groups', () => {
        cy.loginCustom(email, password, true);

        cy.visit('/settings');

        // prevent cypress detached error
        cy.wait(2000);

        cy.t('delete-account:btn').click();

        cy.t('delete-account:blocked:txt').should('exist');
        cy.t('item:go-to-group:btn').should('have.length', 1);
        cy.t('delete-account:confirm:btn').should('be.disabled');
    });

    it('delete account with no active groups', () => {
        // Alice leaves
        cy.login('alice', true);

        cy.t('navbar:search:in').type(`${groupName}{enter}`);
        cy.t('search:sidebar:groups:btn').click();
        cy.t('search:group-results:item', 'title').click();

        cy.t('group-header:more:btn').click();
        cy.t('group-header:leave:btn').click();
        cy.t('confirm:ok:btn').click();

        cy.loginCustom(email, password, true);

        cy.visit('/settings');

        // prevent cypress detached error
        cy.wait(2000);

        cy.t('delete-account:btn').click();

        cy.t('delete-account:blocked:txt').should('not.exist');
        cy.t('delete-account:confirm:btn').should('be.disabled');

        cy.t('delete-account:email:in').type(email);

        cy.t('delete-account:confirm:btn').should('be.enabled');
        cy.t('delete-account:confirm:btn').click();

        cy.url().should('match', /\/$/);

        // Assert logged out
        cy.t('navbar:btn:login').should('be.visible');
    });

    it('account should no longer exist', () => {
        cy.t('navbar:btn:login').click();

        cy.t('email:in').type(email);
        cy.t('password:in').type(password);
        cy.t('submit:btn').click();

        cy.t('error:alert').should('contain.text', 'Incorrect email or password');
    });
});

export {};
