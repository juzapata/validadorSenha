class ValidatePassword {

    constructor(password) {
        this.password = password
    }

    checkLowerCase() {
        if (this.password.match(/[a-z]/)) {
            return true;
        } else { return false }
    }

    checkUpperCase() {
        if (this.password.match(/[A-Z]/)) {
            return true;
        } else { return false }
    }

    checkDigit() {
        if (this.password.match(/[0-9]/)) {
            return true
        } else { return false }
    }

    checkSpecialChar() {
        if (this.password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
            return true
        } else { return false }
    }

    checkNineChars() {
        if (this.password.length >= 9) {
            return true
        } else { return false }
    }

    checkEqualChars() {
        let noEqual = true;
        for (let i = 1; i < this.password.length; i++) {
            const elOne = this.password[i];
            for (let j = 0; j < this.password.length; j++) {
                const elTwo = this.password[j];
                if (i !== j && elOne === elTwo) {
                    noEqual = false
                }
            }
        }
        if (noEqual) {
            return true
        } else { return false }
    }
}

module.exports = ValidatePassword;