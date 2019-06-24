import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';

async function getData() {
  const resp = await axios.get('https://bakesaleforgood.com/api/deals');
  ReactDOM.render(
    <App initialDeals={resp.data.slice(0, 4)} />,
    document.getElementById('root')
  );
}

getData();
