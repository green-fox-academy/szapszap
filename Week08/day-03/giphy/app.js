document.addEventListener('click', function () {
  div = document.querySelector('div');
  xhr = new XMLHttpRequest;
  xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=MxaNRPUm3i0YZYMEESg7MwTFhErWiEyE&q=nebula&limit=16&offset=0&rating=G&lang=en', true);
  xhr.onload = function() {
    let img = document.createElement('img');
    let data = JSON.parse(xhr.responseText);
    for (let i = 1; i < data.data.length; i++) {
      let thumbnail = document.createElement('img');
      thumbnail.setAttribute('src', JSON.parse(xhr.responseText).data[i].images.original.url);
      div.appendChild(thumbnail);
      thumbnail.style.height = '300px';
      thumbnail.style.width = '300px';
      thumbnail.style.cursor = 'pointer';
    }
   }
   xhr.send(); 
  });