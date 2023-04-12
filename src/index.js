import './style.css';
import callApi from './api.js';
import postScore from './postScore.js';

const form = document.querySelector('form');

callApi();
form.addEventListener('submit', postScore);