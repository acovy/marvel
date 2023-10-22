import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './style/style.scss';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <App /> 
    </React.StrictMode>,
  );

/* 
App - корн комп
Комп - функ котор  возвр жиесть-икс
жсикс - файл джс с возм писать аштмл разм внутри
реакт дом рендер - метод будет ренлерить на странице то что внутри компонента апп
10 стр - всю логику компонента апп из джсикс и дочерних компонентов будем подаставлять 
          в контейнер div id root из html файла index.html
*/