# 2023-1-PUMA-ApiGateway
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2023-1-PUMA-ApiGateway&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=fga-eps-mds_2023-1-PUMA-ApiGateway) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2023-1-PUMA-ApiGateway&metric=coverage)](https://sonarcloud.io/summary/new_code?id=fga-eps-mds_2023-1-PUMA-ApiGateway) [![npm version](https://img.shields.io/badge/npm--express-v4.17.1-blue)](https://www.npmjs.com/package/express/v/4.17.1)

## Objetivo

O API Gateway é utilizado como um mutex para a comunicação entre a interface de usuário e os outros micro-serviços. Dessa forma, ao receber uma requisição o gateway atua como uma ponte entre o front end e o serviço desejado. Atualmente, esse serviço é responsável por fazer o tratamento das requisições entre os microsserviços [ProjectService](https://github.com/fga-eps-mds/2023-1-PUMA-ProjectService) e [UserService](https://github.com/fga-eps-mds/2023-1-PUMA-UserService).

## Endpoints

### [User](https://github.com/fga-eps-mds/2023-1-PUMA-UserService)
#### POST - Registrar
```
/user/register
```
#### POST - Entrar
```
/user/login
```
#### GET - Aluno
```
/user/aluno/:matriculaId
```
#### PUT - Nova senha
```
/user/password/:email
```
#### POST - Recuperar senha
```
/user/recover
```
#### GET 
```
/user/initial
```
### [Project](https://github.com/fga-eps-mds/2023-1-PUMA-ProjectService)
#### GET - Propostas de projetos
```
/project/myProposals
```
#### POST - Cria um Project
```
/project
```
#### PUT - Edita um Project
```
/project
```
#### GET - Keywords disponiveis para um Projeto
```
/project/keywords
```
#### PUT - Avaliar um Project
```
/project/evaluate
```
#### PUT - Realoca um Project
```
/project/reallocate
```
#### GET 
```
/project/initial
```
#### GET - Projeto
```
/project/:projectId
```
#### DELETE - Deletar Project
```
/project/:projectId
```
### [Subject](https://github.com/fga-eps-mds/2023-1-PUMA-ProjectService)
#### GET - Coletar Subject
```
/subject
```
#### POST - Adicionar Subject
```
/subject
```
#### GET - Coletar Keywords
```
/subject/keywords
```
#### GET - Coletar Subareas
```
/subject/subareas
```
#### GET - Coletar Knowledgeareas
```
/subject/knowledgeareas
```
#### GET - Coletar Professors
```
/subject/professors
```
#### GET - Coletar Subject
```
/subject/:subjectid
```
#### PUT - Editar Subject
```
/subject/:subjectid
```
#### DELETE - Deletar Subject
```
/subject/:subjectid
```
### [Keyword](https://github.com/fga-eps-mds/2023-1-PUMA-ProjectService)
#### GET - Alternativa de Keywords
```
/keyword
```
#### POST - Criar uma Keyword
```
/keyword
```
#### PUT - Editar uma Keyword
```
/keyword
```
#### POST - Criar um summarize
```
/keyword/subject
```
#### PUT - Editar um summarize
```
/keyword/subject
```
#### DELETE - Deleta uma Keyword
```
/keyword/:keywordid
```

### Como rodar

O nosso projeto utiliza o Docker, Docker Compose e Make como ferramentas de desenvolvimento. Para instalar o Docker e Docker Compose, siga o tutorial no site oficial do [Docker](https://www.docker.com/). Para a instalação do Make execute o comando: 

``` $ sudo apt install build-essential ```

Este microsserviço também é responsável por orquestrar os demais no ambiente local de desenvolvimento, sendo necessário os arquivos de ambiente.

Para buildar e executar o projeto em desenvolvimento, execute o comando:

``` $ make up-build ```

Para apenas executar o projeto, execute:

```$ make up```

Para encerrar os containers de desenvolvimento execute:

``` $ make down ```

Para rodar os testes, execute:

``` $ sudo make test```

``` $ sudo make test-debug```
