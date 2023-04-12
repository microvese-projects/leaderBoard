const postScore = async (e) => {
  e.preventDefault();
  const name = e.target.querySelectorAll('#name')[0].value.toLowerCase();
  const scored = e.target.querySelectorAll('#score')[0].value;

  const id = await localStorage.getItem('id');

  try {
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score: scored,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (err) {
    console.log(err);
  }
  e.target.reset();
};

export default postScore;