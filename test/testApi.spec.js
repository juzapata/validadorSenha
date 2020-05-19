const chai = require('chai');
const http = require('chai-http');
const subset = require('chai-subset');

const index = require('../src/index');

chai.use(http);
chai.use(subset);

// testes do endpoint da API
describe('Teste de Requisição', () => {

    it('senha = "" = retorno false', (done) => {
        chai.request(index.app).get('/validate').send({
            "password": ""
        })
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.a('object');
                chai.expect(res.body).to.be.eql({ "result": false });
                done();
            })
    });

    it('senha = "aa" - retorno false', (done) => {
        chai.request(index.app).get('/validate').send({
            "password": "aa"
        })
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.a('object');
                chai.expect(res.body).to.be.eql({ "result": false });
                done();
            })
    });

    it('senha = "ab" - retorno false', (done) => {
        chai.request(index.app).get('/validate').send({
            "password": "ab"
        })
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.a('object');
                chai.expect(res.body).to.be.eql({ "result": false });
                done();
            })
    });

    it('senha = "AAAbbbCc" - retorno false', (done) => {
        chai.request(index.app).get('/validate').send({
            "password": "AAAbbbCc"
        })
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.a('object');
                chai.expect(res.body).to.be.eql({ "result": false });
                done();
            })
    });

    it('senha = "AbTp9!foo" - retorno false', (done) => {
        chai.request(index.app).get('/validate').send({
            "password": "AbTp9!foo"
        }).end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.a('object');
                chai.expect(res.body).to.be.eql({ "result": false });
                done();
            })
            
    });

    it('senha = "AbTp9!foo" - retorno true', (done) => {
        chai.request(index.app).get('/validate').send({
            "password": "AbTp9!fok"
        }).end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.a('object');
                chai.expect(res.body).to.be.eql({ "result": true });
                done();
            });
    });
})


