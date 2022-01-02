import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import './media.scss';

import App from './app/App';

let nav = {
    "exchange-rates" : "Главная",
    currency : "Пункты обмена",
    contacts : "Контакты",
}

ReactDOM.render(
  <React.StrictMode>
    <App nav={nav} />
  </React.StrictMode>,
  document.getElementById('root')
);

