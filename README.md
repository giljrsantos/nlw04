# NLW#4

## AULA 1 - 
    "dependencies": {
        "express": "^4.17.1",
        "reflect-metadata": "^0.1.13",
        "sqlite3": "^5.0.2",
        "typeorm": "^0.2.31",
        "uuid": "^8.3.2"
    },
    "devDependencies": {
        "@types/express": "^4.17.11",
        "ts-node-dev": "^1.1.1",
        "typescript": "^4.1.5",
        "@types/uuid": "^8.3.0",
    }
---
## AULA 2 - Iniciando com Banco de Dados
    Criando Banco de Dados SQLITE;

    Conhecimento as formas de trabalhar com banco de dados na aplicação

    Configurar o TypeORM na aplicação

    Criando migration do usuário

---
## AULA 3 - Testando a nossa aplicação
    Refatorando o controller
        Criando um repository do usuário.
        Alterando no controller para o repository criado.
    Criando migration de pesquisas(survey);
    Criando repository de pesquisas
    Criando controller de pesquisas
    Criando o primeiro teste
---
### Testes Automatizados
    1 - Testes unitários
    2 - Testes de integração

    -> request -> routes -> controller -> repository
    <- repository <- controller <- response

---
## AULA 4 - Envio de e-mail
    1 - Criando migration de surveysUsers
    2 - Criando model
    3 - Criando repositório
    4 - Criando controller
    5 - Criando serviço de e-mail
    6 - Enviando e-mail