document.querySelector('form')
 .addEventListener('submit', (ev) => {
    alert('Passwords don\'t match, please try again!');
    console.log(ev.target.input);
 });