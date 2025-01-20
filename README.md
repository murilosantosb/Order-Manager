# Orders Management API Project

Este projeto tem como objetivo consumir uma API de gerenciamento de pedidos, apresentando os dados de forma estruturada e ordenada. Ele utiliza Next.js, TypeScript e boas práticas de desenvolvimento para garantir performance, organização e funcionalidade.

## 🚀 Tecnologias Utilizadas

**Next.js:** Framework React para renderização do lado do servidor (SSR) e geração estática (SSG).

**TypeScript:** Para garantir tipagem estática e maior segurança no desenvolvimento.

**CSS/SCSS:** Para estilização e personalização de componentes.

**Fetch API:** Para consumo de dados da API externa.

**HTML Semântico:** Aplicado para construir tabelas e estrutura do conteúdo de forma acessível.

```
├── public/
├── src/
│   ├── components/
│   │   ├── OrdersTable.tsx     # Componente principal da tabela de pedidos.
│   │   └── Loading.tsx         # Indicador de carregamento.
│   ├── context/
│   │   └── OrdersContext.tsx   # Contexto para gerenciamento de estado dos pedidos.
│   ├── hooks/
│   │   └── useFetch.ts         # Hook para consumo de dados da API.
│   ├── interfaces/
│   │   └── OrdersProps.ts      # Definição de tipos e interfaces.
│   ├── pages/
│   │   ├── index.tsx           # Página principal.
│   │   └── _app.tsx            # Configuração global do projeto.
│   └── styles/
│       └── globals.scss        # Estilização global do projeto.
├── package.json
└── README.md
```
## 📦 Instalação

Siga as instruções abaixo para rodar o projeto localmente:

**Clone o repositório:**
```bash
git clone https://github.com/murilosantosb/order-menager.git
``` 
**Instale as dependências:**
```bash
npm i
```
**Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

**Acesse no navegador:** http://localhost:3000

## 🌐 API Consumida

A aplicação consome a seguinte API externa:

Base URL: https://apis.codante.io/api/orders-api/orders

**Parâmetros suportados:**

page: Número da página.

search: Palavra-chave para buscar pedidos.

status: Filtro pelo status do pedido.

date: Data específica no formato YYYY-MM-DD.

## ✨ Funcionalidades

**Listagem de pedidos com paginação.**

Filtros dinâmicos por data, status e busca.

Ordenação de datas (mais recentes/mais antigas).

Indicador de carregamento enquanto os dados são buscados.

Boas práticas de acessibilidade e SEO.
