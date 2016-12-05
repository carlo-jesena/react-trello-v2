require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

const arr = ['the', 'string', 'dog'];
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title="new photo" lists={arr} />, document.getElementById('b'))
);

