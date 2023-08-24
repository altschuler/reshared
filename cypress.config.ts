import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },

    ...({
        mailHogUrl: 'https://local.mailhog.nhost.run',
        mailHogAuth: { user: 'user', pass: 'password' },
    } as any),
});
