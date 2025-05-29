import {apiRequest, invalidAuthorizationToken, noAuthorisationToken, validToken} from "../utils/apiCalls";
import {ENDPOINTS} from "../utils/enums/endpoints";

const expectedResponseTime = 100;

describe('|GET| api/users?page=${page} - Moxymind Get users tests ', () => {

    // Potential tests, however seems once you are authorize for this URL,
    // your IP is authorized for all following requests without need of adding header
    context.skip('Security tests', () => {
        it('Without authorisation token', () => {
            noAuthorisationToken('GET', ENDPOINTS.GET_USERS())
        })
        it('Invalid authorisation token', () => {
            invalidAuthorizationToken("GET", ENDPOINTS.GET_USERS())
        })
    })

    context('Positive tests', () => {
        it('Get first page and verify retrieved data', () => {
            validToken('GET', ENDPOINTS.GET_USERS());

            cy.get('@response').then((response) => {
                const body = response.body;

                //  Basic response assertions
                expect(response.status).to.eq(200);
                expect(body).to.have.property('total');
                expect(body).to.have.property('per_page');
                expect(body).to.have.property('total_pages');
                expect(body.data).to.be.an('array');

                // User data type validation
                body.data.forEach((user) => {
                    expect(user).to.have.property('id').and.to.be.a('number');
                    expect(user).to.have.property('email').and.to.be.a('string');
                    expect(user).to.have.property('first_name').and.to.be.a('string');
                    expect(user).to.have.property('last_name').and.to.be.a('string');
                    expect(user).to.have.property('avatar').and.to.be.a('string');
                });

                //  Match data length with per_page
                expect(body.data.length).to.eq(body.per_page);
            });
        });

        //Using schema
        it('Get first page and verify retrieved data (using schema) ', () => {
            validToken('GET', ENDPOINTS.GET_USERS());

            cy.get('@response').then((response) => {
                cy.fixture('schemas/userList.schema.json').then((schema) => {
                    cy.validateSchema(schema, response.body);
                    expect(response.body.data.length).to.eq(response.body.per_page);
                });
            });
        })

        it('Get page without results and verify empty data', () => {
            validToken('GET', ENDPOINTS.GET_USERS());
            cy.get('@response').then((response) => {
                validToken('GET', ENDPOINTS.GET_USERS(response.body.total_pages + 1));
                cy.get('@response').then((emptyResponse) => {
                    const emptyBody = emptyResponse.body;
                    expect(emptyBody).to.have.property('page', 3);
                    expect(emptyBody.data).to.be.an('array').that.is.empty;
                });
            });
        });
    });
});

describe('|POST| api/users - Moxymind Create user tests', () => {

    // Potential tests, however seems once you are authorize for this URL,
    // your IP is authorized for all following requests without need of adding header
    context.skip('Security tests', () => {
        it('Without authorisation token', () => {
            noAuthorisationToken('POST', ENDPOINTS.POST_CREATE_USERS)
        })
        it('Invalid authorisation token', () => {
            invalidAuthorizationToken("POST", ENDPOINTS.POST_CREATE_USERS)
        })
    })

    it('Should create users and validate response structure and time', () => {
        cy.fixture('newUsers').then((users) => {
            users.forEach((user) => {
                apiRequest('POST', ENDPOINTS.POST_CREATE_USERS, user, 201);
                cy.get('@response').then((response) => {
                    const responseBody = response.body;
                    expect(responseBody.name).to.eq(user.name);
                    expect(responseBody.job).to.eq(user.job);
                    expect(response.duration).to.be.lessThan(expectedResponseTime);
                    cy.fixture('schemas/createUser.schema.json').then((schema) => {
                        cy.validateSchema(schema, responseBody);
                    });
                });
            });
        });
    });
});