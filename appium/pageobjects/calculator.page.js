class CalculatorPage {
    get digit7() { return $('id=digit_7'); }
    get digit3() { return $('id=digit_3'); }
    get digit6() { return $('id=digit_6'); }
    get digit5() { return $('id=digit_5'); }
    get plus() { return $('id=op_add'); }
    get multiply() { return $('id=op_mul'); }
    get equals() { return $('id=eq'); }
    get result() { return $('id=result'); }

    async add7And3() {
        await this.digit7.click();
        await this.plus.click();
        await this.digit3.click();
        await this.equals.click();
    }

    async multiply6And5() {
        await this.digit6.click();
        await this.multiply.click();
        await this.digit5.click();
        await this.equals.click();
    }

    async getResultText() {
        return await this.result.getText();
    }
}

module.exports = new CalculatorPage();
