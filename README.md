# Api de Validação de Senha


### Tech
Tecnologias usadas

* [node.js]
* [express.js]
* [mocha]
* [chai]

### Installation

Requires [Node.js](https://nodejs.org/) v12.16.2 to run.

```sh
$ cd validadorSenha
$ npm install
$ npm run dev
```
- Aplicação irá roda na porta no localhost:3000

- Para testar
```sh
$ npm run test
```

### Endpoints

#### Validação de Senha

- Assim que o servidor estiver rodando (depois de ter dado o comando "npm run dev"). Você pode se utilizar do Postman ou Insomnia para testar o endpoint, ou fazer requisicão em alguma outra aplicação.
- Metodo: GET
- endpoint: localhost:3000/validate
- Exemplo de Body: {
	 "password": "AbTp9!foo"
 }
- Exemplo de Retorno: {
    "result": true
    }