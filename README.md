1 # 🛋️ Mini Loja - E-commerce de Móveis
2
3 Um projeto de e-commerce completo (Full Stack) desenvolvido para estudo de tecnologias modernas
de desenvolvimento web. A aplicação permite listar produtos, filtrar por categorias, gerenciar um
carrinho de compras e finalizar pedidos.
4
5 ## 🚀 Tecnologias
6
7 ### Front-end
8 - **React (v19)** com **TypeScript**
9 - **Vite** (Build tool)
10 - **Styled Components** (CSS-in-JS)
11 - **React Router Dom** (Navegação)
12 - **Axios** (Consumo de API)
13 - **Context API** (Gerenciamento de estado do carrinho)
14
15 ### Back-end
16 - **Node.js** com **TypeScript**
17 - **Express** (Framework web)
18 - **Sequelize** (ORM para banco de dados)
19 - **PostgreSQL** (Banco de Dados Relacional)
20 - **ts-node-dev** (Ambiente de desenvolvimento)
21
22 ---
23
24 ## 📋 Funcionalidades Atuais
25
26 - [x] Listagem de produtos vindos do banco de dados.
27 - [x] Filtro de produtos por nome (busca) e por categoria.
28 - [x] Carrinho de compras persistente (mesmo após atualizar a página).
29 - [x] Sistema de Checkout com integração ao banco de dados.
30 - [x] Histórico de pedidos realizados.
31 - [x] Script de Seed para popular o banco de dados automaticamente.
32
33 ---
34
35 ## 🔧 Como Rodar o Projeto
36
37 ### Pré-requisitos
38 - Node.js instalado.
39 - Banco de dados PostgreSQL rodando.
40
41 ### 1. Configuração do Back-end
42 1. Entre na pasta: `cd back-end`
43 2. Instale as dependências: `npm install`
44 3. Crie um arquivo `.env` baseado no seu ambiente:
DB_NAME=mini_loja
DB_USER=seu_usuario
DB_PASS=sua_senha
1 4. Popule o banco (opcional): `npx ts-node src/seed.ts`
2 5. Inicie o servidor: `npm run dev`
3
4 ### 2. Configuração do Front-end
5 1. Entre na pasta: `cd ../front-end`
6 2. Instale as dependências: `npm install`
7 3. Inicie a aplicação: `npm run dev`
8 4. Acesse: `http://localhost:5173`
9
10 ---
11
12 ## 🛤️ Próximos Passos (Roadmap)
13 - [ ] Implementar Autenticação de Usuários (JWT).
14 - [ ] Implementar baixa de estoque automática após o pedido.
15 - [ ] Containerização com **Docker** e Docker Compose.
16 - [ ] Dashboard administrativo para cadastro de novos produtos.
17
18 ---
19
20 ## 👨‍💻 Desenvolvedor
21 Projeto em desenvolvimento para aprendizado de arquitetura Full Stack.
