let button = document.querySelector('button');
let div = document.querySelector('div');

button.addEventListener('click', () => {
  fetch('http://api.icndb.com/jokes/random')
    .then((response) => response.json())
    .then((chuckies) => {
      let joke = document.createElement('p');
      joke.innerText = chuckies.value.joke
      div.appendChild(joke);
    })
});