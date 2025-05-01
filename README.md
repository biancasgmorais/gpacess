# GPAcess

**GPAcess** é um sistema de controle de acesso desenvolvido para o **Grupo de Pesquisas em Sistemas Críticos** da **Universidade Federal Rural do Semi-Árido** (UFRSA) em Pau dos Ferros, RN. O projeto foi utilizado como **Trabalho de Conclusão de Curso** e é composto por três módulos principais: **Hardware**, **Frontend** e **Backend**.

## Descrição do Projeto

O sistema foi projetado para controlar o acesso ao laboratório do grupo de pesquisas, utilizando a tecnologia de **RFID** para identificar os usuários e permitir o acesso às dependências do laboratório. Ele é composto por:

- **Hardware (Arduino)**: Um módulo Arduino integrado a um **ESP8266** e a um **leitor RFID**, que verifica se o ID da tag RFID existe no banco de dados para liberar a porta. Ele se comunica com o backend em Node.js para realizar a verificação.
  
- **Backend (Node.js)**: O backend, desenvolvido em **Node.js**, gerencia a comunicação com o hardware e com o banco de dados. Ele recebe os dados do leitor RFID, verifica no banco de dados se o acesso pode ser liberado, e registra informações como o horário do acesso e o usuário correspondente. Além disso, o sistema permite que o administrador cadastre os usuários e defina as permissões.

- **Frontend (ReactJS)**: O frontend, desenvolvido com **ReactJS**, proporciona uma interface visual para os usuários. Através dele, o administrador pode gerenciar os usuários (adicionar, editar, remover) e monitorar as entradas e saídas do laboratório. Além disso, os usuários podem acessar seus próprios perfis e verificar seus registros de acesso.

---

## Funcionalidades

- **Autenticação JWT**: Utiliza **JWT** para autenticação de usuários.
- **Segurança**: As senhas são criptografadas usando **bcrypt**.
- **Validação de dados**: Os dados de entrada são validados com **Yup**.
- **Administração**: Apenas usuários administradores podem realizar login e gerenciar os usuários.
- **Cadastro de usuários**: Usuários podem se cadastrar para obter acesso ao sistema e liberar o acesso ao laboratório.
- **Controle de Acesso**: O sistema registra cada entrada e saída, vinculando ao cartão RFID utilizado.

---

## Tecnologias Utilizadas

- **Frontend**: ReactJS
- **Backend**: Node.js
- **Banco de Dados**: PostgreSQL
- **Autenticação**: JWT
- **Criptografia**: bcrypt
- **Validação**: Yup
- **Hardware**: Arduino, ESP8266, RFID Reader

---

## Rodando o Projeto

### Pré-requisitos

- **PostgreSQL** instalado e configurado.
- **Yarn** como gerenciador de pacotes.

### Passos para execução

1. **Instalação dos pacotes**:
    - Instale as dependências do projeto utilizando o comando:
    ```bash
    yarn
    ```

2. **Configuração do ambiente**:
    - Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente com suas credenciais de desenvolvimento.

3. **Configuração do banco de dados**:
    - Abra o código do backend na sua IDE preferida e execute o seguinte comando para criar as tabelas no banco de dados:
    ```bash
    yarn sequelize db:migrate
    ```

4. **Rodando o backend**:
    - Para rodar o backend em modo desenvolvedor, use o comando:
    ```bash
    yarn dev
    ```

---

## Como Funciona

### Processo de Acesso

1. O usuário apresenta sua **tag RFID** ao leitor.
2. O módulo Arduino, integrado ao **ESP8266**, comunica-se com o backend para verificar se o ID da tag existe no banco de dados.
3. O backend retorna as informações do usuário e, se o acesso for permitido, a porta do laboratório é liberada.
4. O sistema registra o horário da entrada e a identificação do usuário no banco de dados.

### Administração de Usuários

- **Cadastro de usuários**: O administrador pode adicionar novos usuários ao sistema, vinculando cada um a uma tag RFID.
- **Gestão de Acessos**: O administrador pode editar, remover ou visualizar usuários e seus registros de acesso.
- **Monitoramento de Acesso**: Através do frontend, é possível visualizar quem entrou ou saiu do laboratório.

---

## Contribuições

Se você deseja contribuir para o projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:  
   `git checkout -b nome-da-sua-branch`
3. Realize as alterações.
4. Envie as alterações para o repositório original com um pull request.

---

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
