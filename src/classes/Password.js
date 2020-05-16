class Password {
    constructor(password) {
        this.password = password
    }

    checkLowCase() {
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

    checkEqual() {
        let noEqual = true;
        let passwordArray = this.password.split('');
        for (let i = 1; i < passwordArray.length; i++) {
            const elOne = passwordArray[i];
            for (let j = 0; j < passwordArray.length; j++) {
                const elTwo = passwordArray[j];
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

module.exports = Password;