// Importa o React para possibilitar a criação de componentes React
import React from 'react';

// Importa a API ReactDOM do React para renderização na DOM
import ReactDOM from 'react-dom/client';

// Importa o arquivo de estilo global
import './index.css';

// Importa o componente principal da aplicação
import App from './App';

// Cria uma raiz React usando a API ReactDOM e associa-a ao elemento com o ID 'root' na DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente principal (App) dentro de um modo rigoroso (StrictMode)
// StrictMode ativa verificações adicionais e avisos para auxiliar no desenvolvimento
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
