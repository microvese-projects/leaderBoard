const callApi = async () => {
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
};

export default callApi;