# 📱 InstaLite

> Clone simplificado do Instagram desenvolvido durante a Oficina de Introdução ao React da JIFMA 2025 (Jornada de Informática do IFMA)
> 

## 🎯 Sobre o Projeto

O **InstaLite** é uma aplicação web que simula as funcionalidades básicas do Instagram, desenvolvida como projeto prático para ensinar os fundamentos do React. A aplicação permite que usuários compartilhem fotos, curtam posts e interajam através de comentários, tudo conectado a um backend real utilizando Supabase.

Este projeto foi criado especialmente para a **JIFMA 2025** (Jornada de Informática do Instituto Federal do Maranhão) como parte de uma oficina hands-on de React.

## ✨ Funcionalidades

- ✅ **Sistema de Autenticação Simples**: Identificação por username (sem senha)
- ✅ **Criar Posts**: Upload de imagens com legenda
- ✅ **Feed de Posts**: Visualização de todos os posts em ordem cronológica
- ✅ **Sistema de Likes**: Curtir e descurtir posts
- ✅ **Comentários**: Sistema completo de comentários em posts
- ✅ **Interface Responsiva**: Design adaptável para mobile e desktop
- ✅ **Persistência de Dados**: Dados salvos em tempo real no Supabase

## 🛠️ Tecnologias Utilizadas

## Frontend

- **React 18+** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS v4** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones

## Backend

- **Supabase** - Backend-as-a-Service (BaaS)
    - PostgreSQL Database
    - Storage para imagens
    - Real-time subscriptions

## 🚀 Como Executar o Projeto

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Conta no Supabase (gratuita)

## Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/instalite.git
cd instalite
```

1. **Instale as dependências**

```bash
npm install
```

1. **Configure as variáveis de ambiente**

Crie um arquivo **`.env`** na raiz do projeto:

```bash
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima
```

1. **Execute o projeto**

```bash
npm run dev
```

1. **Acesse no navegador**

```bash
http://localhost:5173
```

## 📦 Estrutura do Projeto

```bash
instalite/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Cabeçalho da aplicação
│   │   ├── UsernameModal.jsx       # Modal de entrada de usuário
│   │   ├── CreatePost.jsx          # Formulário de criação de posts
│   │   ├── PostList.jsx            # Lista de posts
│   │   ├── PostCard.jsx            # Card individual de post
│   │   ├── LikeButton.jsx          # Botão de curtir
│   │   └── CommentSection.jsx      # Seção de comentários
│   ├── lib/
│   │   └── supabase.js             # Configuração do Supabase
│   ├── App.jsx                     # Componente principal
│   ├── index.css                   # Estilos globais (Tailwind)
│   └── main.jsx                    # Entry point
├── .env                            # Variáveis de ambiente (não commitado)
├── .env.example                    # Exemplo de variáveis
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🗄️ Estrutura do Banco de Dados

## Tabelas

**users**

- **`id`** (UUID) - Primary Key
- **`username`** (TEXT) - Unique
- **`created_at`** (TIMESTAMP)

**posts**

- **`id`** (UUID) - Primary Key
- **`user_id`** (UUID) - Foreign Key → users
- **`image_url`** (TEXT)
- **`caption`** (TEXT)
- **`created_at`** (TIMESTAMP)

**likes**

- **`id`** (UUID) - Primary Key
- **`post_id`** (UUID) - Foreign Key → posts
- **`user_id`** (UUID) - Foreign Key → users
- UNIQUE(post_id, user_id)

**comments**

- **`id`** (UUID) - Primary Key
- **`post_id`** (UUID) - Foreign Key → posts
- **`user_id`** (UUID) - Foreign Key → users
- **`content`** (TEXT)
- **`created_at`** (TIMESTAMP)

## 🎨 Design System

## Cores Principais

```css
--instalite-primary: #E1306C;    /* Rosa Instagram */
--instalite-secondary: #405DE6;  /* Azul Instagram */
--instalite-dark: #262626;       /* Preto suave */
--instalite-light: #FAFAFA;      /* Cinza claro */
--instalite-gray: #8E8E8E;       /* Texto secundário */
--instalite-border: #DBDBDB;     /* Bordas */
```

## 📚 Conceitos React Abordados

## Fundamentos

- ✅ Componentes Funcionais
- ✅ JSX (JavaScript XML)
- ✅ Props
- ✅ Composição de Componentes

## Hooks

- ✅ **`useState`** - Gerenciamento de estado
- ✅ **`useEffect`** - Efeitos colaterais
- ✅ **`useCallback`** - Otimização de funções

## Padrões

- ✅ Controlled Components (Formulários)
- ✅ Conditional Rendering
- ✅ List Rendering com **`.map()`**
- ✅ Event Handling
- ✅ Lifting State Up

## Integração

- ✅ Fetch de dados de API
- ✅ Upload de arquivos
- ✅ LocalStorage
- ✅ Async/Await

## 🎓 Sobre a Oficina

Esta oficina foi ministrada durante a **JIFMA 2025** (Jornada de Informática do IFMA) com duração de aproximadamente 2h45min, cobrindo desde a configuração inicial do ambiente até a implementação de funcionalidades completas de uma rede social.

## Objetivos de Aprendizado

Ao final da oficina, os participantes são capazes de:

- ✅ Criar projetos React com Vite
- ✅ Desenvolver componentes reutilizáveis
- ✅ Gerenciar estado da aplicação
- ✅ Integrar com backend (Supabase)
- ✅ Estilizar com Tailwind CSS v4
- ✅ Implementar upload de arquivos
- ✅ Trabalhar com dados em tempo real

## 🚀 Deploy

O projeto está preparado para deploy na **Vercel**:

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente:
    - **`VITE_SUPABASE_URL`**
    - **`VITE_SUPABASE_ANON_KEY`**
3. Deploy automático a cada push!

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte da JIFMA 2025.

## 👨‍💻 Autor

Desenvolvido para a oficina de React da **JIFMA 2025** - Jornada de Informática do IFMA

---

## 🤝 Contribuindo

Este é um projeto educacional, mas contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação
- Enviar pull requests

## 📞 Suporte

Se você participou da oficina e tem dúvidas:

- Abra uma issue neste repositório
- Entre em contato através dos canais da JIFMA 2025

---

**⭐ Se este projeto te ajudou, deixe uma estrela no repositório!**

#JIFMA2025 #React #Supabase #WebDevelopment #IFMA