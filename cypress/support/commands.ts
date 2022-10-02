/// <reference types="cypress" />
import 'cypress-mailhog';
import { Interception } from 'cypress/types/net-stubbing';
import { testData, TestUserName } from '../resources/data';

export {};

Cypress.Commands.add('login', (user: TestUserName, doLogout?: boolean) => {
    if (doLogout) {
        cy.logout();
        cy.reload();
    }

    const userData = testData.users[user];
    cy.t('navbar:btn:login').click();

    cy.t('email:in').type(userData.email);
    cy.t('password:in').type(userData.password);
    cy.t('submit:btn').click();

    cy.url().should('contain', '/home');
    // TODO: don't wait like this
    cy.wait(1000);
});

Cypress.Commands.add('logout', () => {
    cy.visit('/logout');

    cy.url().should('contain', '/home');
});

Cypress.Commands.add('t', (value, ...childSelectors) => {
    const chain = childSelectors.map((cs) => `[data-cy="${cs}"]`).join(' ');
    return cy.get(`[data-cy="${value}"] ${chain}`);
});

Cypress.Commands.add('decodeQuotedPrintable', { prevSubject: 'optional' }, (subject, value) => {
    // Source: https://github.com/mathiasbynens/quoted-printable/blob/master/quoted-printable.js
    const v = (subject || value) as string;
    const decoded = v
        // https://tools.ietf.org/html/rfc2045#section-6.7, rule 3:
        // “Therefore, when decoding a `Quoted-Printable` body, any trailing white
        // space on a line must be deleted, as it will necessarily have been added
        // by intermediate transport agents.”
        .replace(/[\t\x20]$/gm, '')
        // Remove hard line breaks preceded by `=`. Proper `Quoted-Printable`-
        // encoded data only contains CRLF line  endings, but for compatibility
        // reasons we support separate CR and LF too.
        .replace(/=(?:\r\n?|\n|$)/g, '')
        // Decode escape sequences of the form `=XX` where `XX` is any
        // combination of two hexidecimal digits. For optimal compatibility,
        // lowercase hexadecimal digits are supported as well. See
        // https://tools.ietf.org/html/rfc2045#section-6.7, note 1.
        .replace(/=([a-fA-F0-9]{2})/g, function ($0, $1) {
            var codePoint = parseInt($1, 16);
            return String.fromCharCode(codePoint);
        });
    return cy.wrap(decoded);
});

Cypress.Commands.add('waitRequest', (what: 'files' | 'graphql') => {
    cy.wait(`@${what}`);
});

Cypress.Commands.add('interceptRequests', () => {
    cy.intercept('**/v1/graphql**').as('graphql');
    cy.intercept('**/v1/storage/files**').as('files');
});

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            t(value: string, ...childSelectors: string[]): Chainable<JQuery<Element>>;
            login(user: TestUserName, doLogout?: boolean): void;
            decodeQuotedPrintable(value?: string): Chainable<string>;
            waitRequest(what: 'files' | 'graphql'): Chainable<Interception>;
            interceptRequests(): Chainable<Interception>;
            logout(): void;
        }
    }
}
