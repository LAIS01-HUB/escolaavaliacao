# 📚 Sistema de Controle Acadêmico

## Apresentação

O Sistema de Controle Acadêmico foi desenvolvido com o objetivo de facilitar a organização das turmas e atividades realizadas pelos professores durante o período letivo.

A plataforma permite que os docentes administrem suas informações de forma simples e rápida, mantendo um registro das turmas e tarefas cadastradas.

### Funcionalidades

* Autenticação de professores
* Cadastro de novas turmas
* Consulta de turmas cadastradas
* Remoção de turmas
* Registro de atividades
* Visualização de atividades por turma
* Encerramento de sessão (logout)

---

# 🚀 Tecnologias Aplicadas

### Interface do Usuário

* HTML5
* CSS3
* JavaScript

### Servidor

* Node.js
* Express

### ORM

* Prisma ORM

### Banco de Dados

* MySQL

---

# ⚙️ Ambiente de Desenvolvimento

### Editor de Código

* Visual Studio Code

### Gerenciador de Banco

* MySQL Workbench

### Plataforma de Execução

* Node.js

### Linguagens Utilizadas

* HTML
* CSS
* JavaScript

---

# 🗄 Estrutura do Banco de Dados

### Banco utilizado

```sql
escola_db
```

### Entidades

* Professor
* Turma
* Atividade

### Regras de Relacionamento

* Um professor pode ser responsável por diversas turmas.
* Cada turma está vinculada a apenas um professor.
* Uma turma pode possuir várias atividades.
* Cada atividade pertence a uma única turma.

---

# 🔧 Configuração do Back-end

### Instalação das Dependências

```bash
npm install
```

### Gerar o Cliente Prisma

```bash
npx prisma generate
```

### Sincronizar o Banco

```bash
npx prisma db push
```

### Executar o Projeto

```bash
node server.js
```

Saída esperada:

```text
Servidor executando na porta 3000
```

---

# 🌐 Endpoints Disponíveis

### Professores

```http
POST /professor/cadastrar
```

```http
POST /professor/login
```

```http
GET /professor/listar
```

### Turmas

```http
POST /turma/cadastrar
```

```http
GET /turma/listar/:professorId
```

```http
DELETE /turma/excluir/:id
```

### Atividades

```http
POST /atividade/cadastrar
```

```http
GET /atividade/listar/:turmaId
```

---

# 💻 Execução do Front-end

1. Acesse a pasta do projeto front-end.
2. Abra o arquivo:

```text
index.html
```

Ou utilize a extensão:

```text
Live Server
```

para executar o sistema diretamente pelo navegador.

---

# 📖 Guia de Utilização

### 1. Iniciar o sistema

Abra a página inicial do projeto.

### 2. Realizar autenticação

Entre com um usuário previamente cadastrado 
 email: Robson@gmail.com,
  senha: 123

### 3. Gerenciar turmas

Cadastre novas turmas e acompanhe as existentes.

### 4. Adicionar atividades

Selecione uma turma e registre as atividades desejadas.

### 5. Consultar informações

Visualize todas as atividades vinculadas às turmas.

### 6. Encerrar sessão

Utilize o botão de saída para finalizar o acesso.

---

# 📷 Capturas de Tela

Adicionar imagens das seguintes páginas:

* Tela de Login
* Dashboard Principal
* Cadastro de Turmas
* Listagem de Turmas
* Cadastro de Atividades
* Listagem de Atividades

---

# 👩‍💻 Autora

**Lais Rocha**

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento de Sistemas.
