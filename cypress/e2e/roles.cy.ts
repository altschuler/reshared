import { testData } from '../resources/data';

describe('roles', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.interceptRequests();
    });

    it('grant admin role', () => {
        cy.login('alice', true);

        cy.visit(`/groups/${testData.groups.one.shortId}`);

        cy.t('group-header:members:btn').click();

        let bob = getBobItem();
        bob.should('contain.text', 'Bob');
        bob.should('not.contain.text', 'Admin');

        bob.t('member-list:item:more:btn').click();
        cy.t('dropdown:make-admin:btn').click();
        cy.t('change-role-modal:confirm:btn').click();

        bob = getBobItem();

        bob.should('contain.text', 'Bob');
        bob.should('contain.text', 'Admin');

        // Revoke the admin rights
        bob.t('member-list:item:more:btn').click();
        cy.t('dropdown:revoke-admin:btn').click();
        cy.t('change-role-modal:confirm:btn').click();

        bob = getBobItem();

        bob.should('contain.text', 'Bob');
        bob.should('not.contain.text', 'Admin');
    });
});

const getBobItem = () =>
    cy
        .t('member-list:item')
        .filter((_i, e) => e.innerText.includes('Bob'))
        .first();
