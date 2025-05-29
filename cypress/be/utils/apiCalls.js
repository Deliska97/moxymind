export const validToken = (methodType, endpoint, body = {}) => {
    cy.request({
        method: methodType,
        url: Cypress.config('baseUrl') + endpoint,
        headers: {
            'x-api-key': Cypress.env('apiKey'),
        },
        body: body,
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.wrap(response).as('response');
    });
};

export const apiRequest = (methodType, endpoint, body = {}, status) => {
    cy.request({
        method: methodType,
        url: Cypress.config('baseUrl') + endpoint,
        headers: {
            'x-api-key': Cypress.env('apiKey'),
        },
        body: body,
    }).then((response) => {
        expect(response.status).to.eq(parseInt(status));
        cy.wrap(response).as('response');
    });
};

export const noAuthorisationToken = (methodType, endpoint, body = {}) => {
    return cy
        .request({
            method: methodType,
            url: Cypress.config('baseUrl') + endpoint,
            failOnStatusCode: false,
            headers: {},
            body: body,
        })
        .then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.error).to.eq('Missing API key.');
        });
}

export const invalidAuthorizationToken = (methodType, endpoint, body = {}) => {
    return cy
        .request({
            method: methodType,
            url: Cypress.config('baseUrl') + endpoint,
            failOnStatusCode: false,
            headers: {
                'x-api-key': '123',
            },
            body: body,
        })
        .then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.error).to.eq('Invalid API key.');
        });
}