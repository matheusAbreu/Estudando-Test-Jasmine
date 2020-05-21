# Estudando-Test-Jasmine
Estudando (jasmine)[https://jasmine.github.io/], Curso da (Alura)[https://cursos.alura.com.br/course/testes-automatizados-em-javascript-com-jasmine]

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