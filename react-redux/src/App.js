import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';

async function getData() {
  const resp = await axios.get(
    'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=338b9e08c1e5acbef9302a70d6ea86f1&format=json'
  );
  console.log(resp.data.tracks.track);
  ReactDOM.render(
    <App
      initialDeals={resp.data.tracks.track.slice(0, 5)}
      initialDealsLenght={resp.data.tracks.track.length}
    />,
    document.getElementById('root')
  );
}

getData();
