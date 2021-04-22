// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const obj = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  }
  const response = await fetch(API_URL, obj);
  const postData = await response.json()
  console.log(postData.joke)
};

window.onload = () => fetchJoke();