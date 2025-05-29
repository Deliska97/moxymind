const calc = require('../pageobjects/calculator.page');

describe('Android Calculator Tests', () => {
    it('should add 7 and 3 and return 10', async () => {
        await calc.add7And3();
        const result = await calc.getResultText();
        expect(result).toEqual('10');
    });

    it('should multiply 6 and 5 and return 30', async () => {
        await calc.multiply6And5();
        const result = await calc.getResultText();
        expect(result).toEqual('30');
    });
});
