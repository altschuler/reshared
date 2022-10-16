describe('group flow', () => {
    const name = `group-${Math.ceil(Math.random() * 10000000)}`;
    const description = `group description`;

    let privateUrl: string | null = null;

    beforeEach(() => {
        cy.visit('/');
        cy.interceptRequests();
    });

    it('create public group', () => {
        cy.login('alice', true);

        cy.t('navbar:my-groups:btn').click();

        cy.url().should('match', /\groups$/);

        cy.t('create-group:btn').click();

        cy.t('name:in').type(name);
        cy.t('description:in').type(description);
        cy.t('public:cb').check();
        cy.t('images', 'input').selectFile('cypress/resources/cat.jpg', { force: true });
        cy.t('images', 'remove').should('exist');
        cy.t('images', 'preview').should('exist');

        cy.waitRequest('files');

        cy.t('submit:btn').click();

        cy.waitRequest('graphql');

        cy.url().should('match', /\/groups\/\w+$/, { timeout: 3000 });

        cy.t('group-header:title:txt').should('contain.text', name);
        cy.t('group-header:image').should('exist');

        cy.t('group-header:more:btn').click();
        cy.t('group-header:members:btn').click();

        cy.t('member-list:item').should('have.length', 1);
        cy.t('member-list:item').first().should('contain.text', 'Owner');
    });

    it('join public group', () => {
        cy.login('bob', true);

        cy.t('navbar:search:in').type(`${name}{enter}`);

        cy.url().should('contain', '/search');

        cy.t('search:sidebar:groups:btn').click();

        cy.t('search:group-results:item', 'title').click();

        cy.url().should('match', /\/groups\/\w+$/, { timeout: 3000 });

        cy.t('group-header:more:btn').should('not.exist');

        cy.t('group-header:join:btn').click();

        cy.t('group-header:more:btn').should('exist');
    });

    // it('get join notification', () => {
    //     cy.login('alice', true);
    // });

    it('create private group without image', () => {
        cy.login('alice', true);

        cy.t('navbar:my-groups:btn').click();

        cy.url().should('match', /\groups$/);

        cy.t('create-group:btn').click();

        cy.t('name:in').type(`${name} private`);
        cy.t('description:in').type(`${description} private`);
        cy.t('public:cb').uncheck();

        cy.t('submit:btn').click();

        cy.waitRequest('graphql');

        cy.url().should('match', /\/groups\/\w+$/, { timeout: 3000 });

        cy.url().then((url) => (privateUrl = url));

        cy.t('group-header:title:txt').should('contain.text', name);
        cy.t('group-header:image').should('not.exist');

        cy.t('group-header:more:btn').click();
        cy.t('group-header:members:btn').click();

        cy.t('member-list:item').should('have.length', 1);
        cy.t('member-list:item').first().should('contain.text', 'Owner');
    });

    it('request join private group', () => {
        cy.login('bob', true);

        cy.t('navbar:search:in').type(`${name} private{enter}`);

        cy.url().should('contain', '/search');

        cy.t('search:sidebar:groups:btn').click();

        cy.t('search:group-results:item', 'title').click();

        cy.url().should('match', /\/groups\/\w+$/, { timeout: 3000 });

        cy.t('group-header:more:btn').should('not.exist');

        cy.t('group-header:join:btn').click();

        cy.t('confirm:message:in').type('Can I join?');
        cy.t('confirm:ok:btn').click();

        cy.waitRequest('graphql');

        cy.t('group-header:more:btn').should('not.exist');

        cy.t('group-header:join:btn').should('contain.text', 'pending');
    });

    it('accept request to join private group', () => {
        cy.login('alice', true);

        if (!privateUrl) {
            throw new Error('Private group url not stored');
        }
        cy.visit(privateUrl);

        cy.t('group-header:more:btn').click();
        cy.t('group-header:members:btn').click();

        cy.t('join-request-list', 'item', 'accept:btn').first().click();

        cy.t('join-request-list', 'item').should('not.exist');
    });
});

export {};
