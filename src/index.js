import './style.css';
import callApi from './api.js';
import postScore from './postScore.js';
import getScores from './getScores.js';

const form = document.querySelector('form');
const refreshBtn = document.querySelector('#refresh');
const scoresList = document.querySelector('#scores-list');

const setList = async () => {
  const data = await getScores();
  scoresList.innerHTML = '';
  data.forEach(({
    score, user,
  }) => {
    const li = document.createElement('li');
    li.className = 'score';
    li.textContent = `${user.toUpperCase()}: ${score}`;
    scoresList.appendChild(li);
  });
};

callApi();
form.addEventListener('submit', postScore);
refreshBtn.addEventListener('click', setList);
window.onload = setList;