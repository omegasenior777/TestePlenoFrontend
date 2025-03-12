# 📚 Projeto Biblioteca - React

Este é um projeto de uma aplicação React que exibe uma lista de livros com uma página de login e e umapágina de cadastro.

---

## 🚀 Tecnologias Utilizadas
- **React** (com Vite)
- **TypeScript**
- **React Router** (para navegação entre páginas)
- **React Toastify** (para exibir notificações)

---

## 📂 Estrutura do Projeto
```
📂 src/
├── 📁 components/
│   ├── 📁 body/
│   ├── 📄 body.tsx  # Componente para mostar livros ou inforção de placeholder
│   ├── 📁 cadastro/
│   ├── 📄 cadastro.tsx  # Componente para cadastro de usuário
│   ├── 📁 header/
│   ├── 📄 header.tsx  # Componente para títulos principais
│   ├── 📁 livros/
│   ├── 📄 livros.tsx  # Componente para listar livros
│   ├── 📁 login/
│   ├── 📄 login.tsx  # Componente para realizar login
│   ├── 📁 navbar/
│   ├── 📄 navbar.tsx  # Componente para área de navegação
├── 📁 Mocks/
│   ├── 📄 livros.ts  # Dados estáticos dos livros
├── 📁 routes/
│   ├── 📄 home.tsx  # Página inicial
│   ├── 📄 login.tsx  # Página de login
│   ├── 📄 register.tsx  # Página de cadastro
├── 📄 App.tsx  # Configuração das rotas
└── 📄 main.tsx  # Arquivo principal
```

---

## 🔧 Como Rodar o Projeto

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/seu-usuario/projeto-biblioteca.git
```

### 2️⃣ Acesse o diretório do projeto
```bash
cd projeto-biblioteca
```

### 3️⃣ Instale as dependências
```bash
npm install  # ou yarn install
```

### 4️⃣ Rode o projeto
```bash
npm run dev  # ou yarn dev
```

Acesse a aplicação em **http://localhost:5173** (ou outra porta que o Vite exibir no terminal).

---

## 🛠️ Funcionalidades
✅ Listagem de livros a partir de um arquivo TypeScript.  
✅ Cadastro e login com navegação entre páginas.  
✅ Exibição de mensagens de erro e sucesso com **React Toastify**.  
✅ Rotas protegidas e navegação com **React Router**.  

---

## 📜 Configuração das Rotas
As rotas do projeto estão configuradas no arquivo **App.tsx**:
```tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/login';
import HomePage from './routes/home';
import RegisterPage from './routes/register';
import './styles/globals.css'

function App() {
  return (
    <Router>
			<Routes>
				<Route path="/" element={<LoginPage/>} />
				<Route path="/register" element={<RegisterPage/>} />
				<Route path="/home" element={<HomePage/>} />
			</Routes>
		</Router>
  );
}
export default App;
```

---
