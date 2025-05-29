import Ajv from 'ajv';

Cypress.Commands.add('validateSchema', (schema, data) => {
    const ajv = new Ajv({ allErrors: true, strict: false });
    const validate = ajv.compile(schema);
    const valid = validate(data);

    if (!valid) {
        console.error('Schema validation errors:', validate.errors);
    }

    expect(valid, `Schema validation failed: ${JSON.stringify(validate.errors, null, 2)}`).to.be.true;
});