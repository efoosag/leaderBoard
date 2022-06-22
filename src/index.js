import './styles.css';

const refresh = document.getElementById('refresh');
const playerName = document.getElementById('player-name');
const playerScore = document.getElementById('player-score');
const displayDiv = document.querySelector('.scores-list');
const form = document.querySelector('form');

const id = 't6g6zhJo4Iiaiqnegg3i';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;

const addScores = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: playerName.value,
        score: playerScore.value,
      }),
    });

    form.reset();
  });
};

addScores();

const retrieveData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  data.result.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('scores-list-item');
    li.innerText = `${item.user}: ${item.score}`;
    displayDiv.appendChild(li);
  });
};

refresh.addEventListener('click', () => {
  retrieveData();
});

window.addEventListener('load', retrieveData);
