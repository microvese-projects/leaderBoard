const message = document.querySelector('#message');

const fade = () => {
  let i = 10;
  message.style.opacity = 1;
  const inter = setInterval(() => {
    if (i <= 0) {
      clearInterval(inter);
    } else {
      message.style.opacity = i / 10;
      i -= 1;
    }
  }, 100);
};

const postScore = async (e) => {
  e.preventDefault();
  const name = e.target.querySelectorAll('#name')[0].value.toLowerCase();
  const scored = e.target.querySelectorAll('#score')[0].value;

  const id = await localStorage.getItem('id');

  try {
    await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score: scored,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    message.textContent = 'Score posted succesfully!';
    message.style.display = 'block';
    setTimeout(async () => {
      await fade();
      setTimeout(() => {
        message.style.display = 'none';
      }, 1000);
    }, 6000);
  } catch (err) {
    throw new Error(err);
  }
  e.target.reset();
};

export default postScore;