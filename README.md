# [NLW#4] Trilha Node.Js

## AULA 1 - 
    "dependencies": {
        "express": "^4.17.1",
        "express-async-errors": "^3.1.1",
        "handlebars": "^4.7.7",
        "nodemailer": "^6.5.0",
        "reflect-metadata": "^0.1.13",
        "sqlite3": "^5.0.2",
        "typeorm": "^0.2.31",
        "uuid": "^8.3.2",
        "yup": "^0.32.9"
    },
    "devDependencies": {
        "@types/express": "^4.17.11",
        "@types/jest": "^26.0.20",
        "@types/nodemailer": "^6.4.0",
        "@types/supertest": "^2.0.10",
        "@types/uuid": "^8.3.0",
        "jest": "^26.6.3",
        "supertest": "^6.1.3",
        "ts-jest": "^26.5.2",
        "ts-node-dev": "^1.1.1",
        "typescript": "^4.1.5"
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
---
## AULA 5 - Finalziando nossa api com validações
    1 - Refatorar o SendMailController
    2 - Criando Controller de resposta do usuário
        1 - Validar se o usuário existe.
        2 - Alterar a nota da respista.
    3 - Criando controller com cálculo do NPS
    4 - Criando validações