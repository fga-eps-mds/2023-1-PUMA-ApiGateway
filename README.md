# 2021-1-PUMA-ApiGateway

## Objetivo

Esse serviço é responsável em fazer o tratamento das requisições entre os microsserviços [NotifyService](https://github.com/fga-eps-mds/2021-1-PUMA-NotifyService), [AlocateService](https://github.com/fga-eps-mds/2021-1-PUMA-AlocateService), [ProjectService](https://github.com/fga-eps-mds/2021-1-PUMA-ProjectService), [UserService](https://github.com/fga-eps-mds/2021-1-PUMA-UserService).

## Como usar

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

