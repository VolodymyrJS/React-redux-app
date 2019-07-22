import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import storeConfig from '../store/storeConfig';

//const data = axios.get(url);
//console.log(data);

const ProductView = ({ match }) => {
  console.log(match);
  // const product = products.find(item => item.id === match.params.id);
  // console.log(product, match.params.id);
  const nameForUrl = match.params.artist;
  const url_about = 'http://ws.audioscrobbler.com/2.0/';
  const method_obout = '?method=artist.getinfo&';
  const url_name = 'artist=' + nameForUrl + '&api_';
  const key_about = 'key=338b9e08c1e5acbef9302a70d6ea86f1';
  const format_about = '&format=json';
  const url = url_about + method_obout + url_name + key_about + format_about;
  (async function getData() {
    const aboutArtist = await axios.get(url);
    console.log(aboutArtist.data);
  })();
  return (
    <div>
      <h3>Product ID: {match.params.artist}</h3>
      <h3>{/* {product.id} - {product.label} */}</h3>
      <Link to={`/`}>Back to home</Link>
    </div>
  );
};

export default connect()(ProductView);
