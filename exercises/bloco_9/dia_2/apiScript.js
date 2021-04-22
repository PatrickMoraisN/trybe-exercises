// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const obj = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  }
  const response = await fetch(API_URL, obj);
  const postData = await response.json()
  return postData.joke;
};

const jokeOnPage = async () => {
  const h2Element = document.querySelector('#jokeContainer');
  h2Element.innerHTML = await fetchJoke();
}
window.onload = () => jokeOnPage();