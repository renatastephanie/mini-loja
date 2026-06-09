# 🛋️ Mini Loja — E-commerce de Móveis

Aplicação Full Stack de e-commerce desenvolvida para aprendizado de tecnologias modernas de desenvolvimento web. O projeto permite listar produtos, filtrar por categorias, gerenciar um carrinho de compras e finalizar pedidos com persistência no banco de dados.

---

## 🚀 Tecnologias

### Front-end
- **React (v19)** com **TypeScript**
- **Vite** — build tool
- **Styled Components** — estilização CSS-in-JS
- **React Router Dom** — navegação entre páginas
- **Axios** — consumo de API REST
- **Context API** — gerenciamento de estado do carrinho

### Back-end
- **Node.js** com **TypeScript**
- **Express** — framework web
- **Sequelize** — ORM para banco de dados
- **PostgreSQL** — banco de dados relacional
- **ts-node-dev** — ambiente de desenvolvimento com hot reload

---

## ✅ Funcionalidades

- [x] Listagem de produtos a partir do banco de dados
- [x] Filtro de produtos por nome (busca) e por categoria
- [x] Carrinho de compras persistente (mantido após recarregar a página)
- [x] Sistema de checkout com integração ao banco de dados
- [x] Histórico de pedidos realizados
- [x] Script de seed para popular o banco de dados automaticamente

---

## 🔧 Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- PostgreSQL rodando localmente

### 1. Back-end

```bash
cd back-end
npm install
```

Crie um arquivo `.env` na raiz do back-end com as suas credenciais:

```env
DB_NAME=mini_loja
DB_USER=seu_usuario
DB_PASS=sua_senha
```

```bash
# (Opcional) Popular o banco com dados iniciais
npx ts-node src/seed.ts

# Iniciar o servidor
npm run dev
```

### 2. Front-end

```bash
cd ../front-end
npm install
npm run dev
```

Acesse a aplicação em: [http://localhost:5173](http://localhost:5173)

---

## 🛤️ Roadmap

- [ ] Autenticação de usuários com JWT
- [ ] Baixa automática de estoque após confirmação de pedido
- [ ] Containerização com Docker e Docker Compose
- [ ] Dashboard administrativo para gerenciamento de produtos

---

## 👩‍💻 Desenvolvedora

Feito por [**renatastephanie**](https://github.com/renatastephanie) — projeto em desenvolvimento para aprendizado de arquitetura Full Stack.
