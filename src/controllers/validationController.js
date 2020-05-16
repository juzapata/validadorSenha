const express = require('express');
const Password = require('../classes/Password');

const router = express.Router();


router.get('/validate', async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).send({ erro: 'Você precisa colocar a senha a ser validada no body' });
        }
        let password = new Password(req.body.password);
        if (
            !password.checkLowCase() ||
            !password.checkUpperCase() ||
            !password.checkDigit() ||
            !password.checkSpecialChar() ||
            !password.checkNineChars() ||
            !password.checkEqual()
        ) {
            return res.status(200).send({ result: false })
        } else {
            return res.status(200).send({ result: true })
        }

    } catch (error) {
        console.log('ERRO', error)
        return res.status(400).send(error);
    }
});

module.exports = app => app.use('/', router);