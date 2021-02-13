# GrupoReact418 Demo

### União de todos os aplicativos desenvolvidos na disciplina PJS

## Tabela de conteúdo

- [Sobre o Projeto](#sobre-o-projeto)
- [Nota](#nota)
- [Desenvolvimento](#Desenvolvimento)
- [Como usar](#como-usar)
- [Instalação](#instala%C3%A7%C3%A3o)
- [Build](#build)
- [Licença](#licen%C3%A7a)

## Sobre o Projeto

Este projeto une todos os aplicativos desenvolvidos na disciplina PJS de uma forma simples e acessível.


## Nota

Você está no repositório da versão offline! 

Também temos a [versão online](https://github.com/matheusferr/GrupoReact418_Notas_Compartilhadas/tree/firabase) que utiliza o banco de dados Firebase.

## Desenvolvimento

Clone este repositório com o comando:
```bash
git clone https://github.com/matheusferr/GrupoReact418_Demo.git
```
* Entre no diretório **GrupoReact418_Demo** e instale as dependências utilizando o Yarn:
```bash
yarn
```

## Como Usar

Dentro do diretório do projeto, você pode executar os seguinte comandos:

### `yarn start`

Inicía o Metro Server para desenvolvimento do app.

A aplicação atualizará automaticamente quando você editar o código.

### `yarn android`

Compila a versão debug e instala nos dipositivos android conectados via **ADB**. Caso não encontre nenhum dispositivo, o emulador será iniciado.

### `yarn ios`

Compila a versão debug e instala no emulador iOS.

## Instalação

Baixe o arquivo [APK](https://github.com/matheusferr/GrupoReact418_Demo/releases) compatível com seu dispositivo e em seguida instale o aplicativo.

### Build
Entre no diretório **android** e execute o seguinte comando:
```bash
./gradlew assembleRelease
```
O **apk** será gerado em **android/app/build/outputs/apk/release** após a conclusão do processo.

## Licença

[MIT License](https://opensource.org/licenses/MIT)
