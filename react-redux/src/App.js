import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';


async function getData() {
    const resp = await axios.get('https://bakesaleforgood.com/api/deals');
    ReactDOM.render(<App deals={resp.data} />, document.getElementById('root'));
}

getData();
