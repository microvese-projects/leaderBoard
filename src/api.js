const fired = localStorage.getItem('id');

const hitApi = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: "Ben's Game",
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const message = await response.json();
  const id = message.result.split(' ')[3];
  localStorage.setItem('id', id);
};

const callApi = () => {
  if (fired) return;
  hitApi();
};

export default callApi;