const getScores = async () => {
  const id = await localStorage.getItem('id');
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
  const response = await fetch(url);
  const json = await response.json();
  return json.result;
};

export default getScores;