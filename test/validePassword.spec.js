const chai = require('chai');
const ValidatePassword = require('../src/classes/ValidatePassword');

// testes do metodos separadamente
describe('Classe ValidatePassword - testes metodos isolados', () => {
    it('checkLowerCase - Deve retornar false', () => {
        const validatePassword = new ValidatePassword('FGFF555');
        chai.expect(validatePassword.checkLowerCase()).to.be.eql(false);
    });

    it('checkLowerCase - Deve retornar true', () => {
        const validatePassword = new ValidatePassword('sssvvvFddd3567Rf');
        chai.expect(validatePassword.checkLowerCase()).to.be.eql(true);
    });

    it('checkUpperCase - Deve retornar false', () => {
        const validatePassword = new ValidatePassword('5634cdgg@@@');
        chai.expect(validatePassword.checkUpperCase()).to.be.eql(false);
    });

    it('checkUpperCase - Deve retornar true', () => {
        const validatePassword = new ValidatePassword('sdf4567^%R');
        chai.expect(validatePassword.checkUpperCase()).to.be.eql(true);
    });

    it('checkDigit - Deve retornar false', () => {
        const validatePassword = new ValidatePassword('Rgvdscdgg@@@');
        chai.expect(validatePassword.checkDigit()).to.be.eql(false);
    });

    it('checkDigit - Deve retornar true', () => {
        const validatePassword = new ValidatePassword('7sdf4567^%R4');
        chai.expect(validatePassword.checkDigit()).to.be.eql(true);
    });

    it('checkSpecialChar - Deve retornar false', () => {
        const validatePassword = new ValidatePassword('Rgvdscdgg54fg');
        chai.expect(validatePassword.checkSpecialChar()).to.be.eql(false);
    });

    it('checkSpecialChar - Deve retornar true', () => {
        const validatePassword = new ValidatePassword('*sdf4567^%R4!');
        chai.expect(validatePassword.checkSpecialChar()).to.be.eql(true);
    });

    it('checkNineChars - Deve retornar false', () => {
        const validatePassword = new ValidatePassword('12343456');
        chai.expect(validatePassword.checkNineChars()).to.be.eql(false);
    });

    it('checkNineChars - Deve retornar true', () => {
        const validatePassword = new ValidatePassword('*sdf4567^%R4!');
        chai.expect(validatePassword.checkNineChars()).to.be.eql(true);
    });

    it('checkEqualChars - Deve retornar false', () => {
        const validatePassword = new ValidatePassword('dd6htdd655');
        chai.expect(validatePassword.checkEqualChars()).to.be.eql(false);
    });

    it('checkEqualChars - Deve retornar true', () => {
        const validatePassword = new ValidatePassword('3fsg69kk');
        chai.expect(validatePassword.checkEqualChars()).to.be.eql(false);
    });

    it('checkEqualChars - Deve retornar false', () => {
        const validatePassword = new ValidatePassword('33fsg69k');
        chai.expect(validatePassword.checkEqualChars()).to.be.eql(false);
    });

    it('checkEqualChars - Deve retornar false', () => {
        const validatePassword = new ValidatePassword('3fsgJJ69k');
        chai.expect(validatePassword.checkEqualChars()).to.be.eql(false);
    });

    it('checkEqualChars - Deve retornar true', () => {
        const validatePassword = new ValidatePassword('cdft3456!@');
        chai.expect(validatePassword.checkEqualChars()).to.be.eql(true);
    });


});

