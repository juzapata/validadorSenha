const express = require('express');
const ValidatePassword = require('../classes/ValidatePassword');

const router = express.Router();


router.get('/validate', async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).send({ erro: 'Você precisa colocar a senha a ser validada no body' });
        }
        const validadepassword = new ValidatePassword(req.body.password);
        if (
            !validadepassword.checkNineChars() ||
            !validadepassword.checkLowerCase() ||
            !validadepassword.checkUpperCase() ||
            !validadepassword.checkDigit() ||
            !validadepassword.checkSpecialChar() ||
            !validadepassword.checkEqualChars()
        ) {
            return res.status(200).send({ result: false })
        } else {
            return res.status(200).send({ result: true })
        }

    } catch (error) {
        console.log('ERR', error);
        return res.status(400).send(error);
    }
});

module.exports = app => app.use('/', router);