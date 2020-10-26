# Estudando-Test-Jasmine
Estudando [jasmine](https://jasmine.github.io/), Curso da [Alura](https://cursos.alura.com.br/course/testes-automatizados-em-javascript-com-jasmine)


## Criando Projeto
Inicie o npm
>npm init

Adicione o Jasmine
>npm install --save-dev jasmine jasmine-console-reporter

Inicialize o Jasmine
>npx jasmine init

Adicione no package.json
``` json
{...
    "scripts":{
        "test": "jasmine --reporter=jasmine-console-reporter"
        } 
...}
```

## Testando Este exemplo

1 - Tenha o [npm](https://nodejs.org/en/download/) instalado em sua máquina.

2 - Abra o terminal/CMD na pasta do projeto

3 - Execute
```shell
#Para instalar as dependecias
:npm i

#Para rodar o index.js do projeto
:npm start

#para rodar a bateria de teste do projeto
:npm test
```