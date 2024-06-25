# API de Gestão de Medidas Protetivas

Este projeto é uma API de Gestão de Medidas Protetivas para Mulheres, construída com [NestJS](https://nestjs.com/) e [Prisma](https://www.prisma.io/). A API fornece endpoints para gerenciar registros de vítimas, agressores, policiais e medidas protetivas, conforme a Lei Maria da Penha.

## Índice

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Executando a Aplicação](#executando-a-aplicação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints da API](#endpoints-da-api)
  - [Vítimas](#vítimas)
  - [Agressores](#agressores)
  - [Policiais](#policiais)
  - [Medidas Protetivas](#medidas-protetivas)
  - [Visitas](#visitas)
- [Prisma Schema](#prisma-schema)
- [Licença](#licença)

## Introdução

Esta API foi desenvolvida para ajudar na gestão de medidas protetivas para mulheres vítimas de violência, conforme estabelecido pela Lei Maria da Penha. Ela permite o gerenciamento de informações de vítimas, agressores, policiais, medidas protetivas e visitas, facilitando o acompanhamento e a aplicação das medidas protetivas.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/brunocotto/api-eproc-senac.git

## Executando a Aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Endpoints Disponíveis

| Método | Endpoint                | Descrição                              |
|--------|-------------------------|----------------------------------------|
| GET    | /visits                 | Retorna todas as visitas               |
| GET    | /agressors              | Retorna todos os agressores            |
| GET    | /victims                | Retorna todas as vítimas               |
| GET    | /police-officers        | Retorna todos os policias              |
| GET    | /protective-measures    | Retorna todas as medidas protetivas    |
| POST   | /agressors              | Cria um novo agressor                  |
| POST   | /victims                | Cria uma nova vítima                   |
| POST   | /agressors              | Cria um novo agressor                  |
| POST   | /protective-measures    | Cria uma nova medida protetiva         |
| POST   | /visits                 | Cria uma nova visita                   |
| GET    | /police-officers/{id}   | Retorna detalhes de um policial por ID |
| PUT    | /visits/{id}            | Atualiza uma visita                    |

## Installation

```bash
$ npm install
```
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
