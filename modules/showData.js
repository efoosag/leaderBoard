import { retrieveData } from './apiData.js';

const displayAll = () => {
  const displayScores = document.getElementById('scores-list');
  retrieveData().then((data) => {
    const allScores = data.result;
    allScores.forEach((score) => {
      const li = document.createElement('li');
      li.classList.add('scores-list-item');

      li.innerText = `${score.user}: ${score.score}`;
      displayScores.appendChild(li);
    });
  });
};
export default displayAll;
