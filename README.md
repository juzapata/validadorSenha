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
	 "password": "AbTp9!fok"
 }
- Exemplo de Retorno: {
    "result": true
    }


### Explicação técnica

Primeiramente tentei seguir os conceitos básicos de Clean Code, como nome de variáveis, tratamento de erros, e fazer um código que se explique por si, sem precisar de muitos comentários. 

A partir disso, eu dividi o projeto em 3 "partes": index, controllers e classes. Para o index ficou reservada a função de agregar todos os arquivos e fazer o servidor rodar. Para o controller, ficou a função de criar o endpoint para a API, receber as informações da requisição, que no caso é a senha, e retornar a resposta.

Por último, optei por criar somente uma classe, pois acredito que ela tem somente uma função: fazer a validação da senha. Assim a classe ValidatePassword, tem vários métodos, cada um fazendo uma validação única diferente. Assim, acredito que caso existisse novas validações a serem feitas, o trabalho seria de somente adicionar um novo método na classe, e invocá-lo no controller. 

Para possível refatoração, tem dois pontos: Primeiro, melhorar a performance da lógica de validação de caracteres iguais. E segundo, possivelmente, e eu digo possivelmente, porque eu não sei se é necessário realmente. Colocar a validação de todos os métodos da classe, ou seja, na checagem que existe se todos retornam true, (que se encontra no validationController) em uma segunda classe. Para que o controller fique mais "limpo". Acredito que se fosse um projeto maior, com mais controllers, faria mais sentido. 
