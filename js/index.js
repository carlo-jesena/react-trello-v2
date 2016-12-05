require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

const arr = ['the', 'string', 'dog'];
const content = ['carlo', 'alex', 'casey'];
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title="new photo" lists={arr} december={content}/>, document.getElementById('b'))
);

