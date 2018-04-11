
document.addEventListener('click', function () {
  xhr = new XMLHttpRequest;
  xhr.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=MxaNRPUm3i0YZYMEESg7MwTFhErWiEyE&tag=&rating=G', true);
  xhr.onload = function() {
    data = JSON.parse(xhr.responseText).data.image_url;
    console.log(data);
    document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
    };
  xhr.send();
});


// https://gist.github.com/nealrs/28dbfe2c74dfdde26a30

// document.addEventListener('DOMContentLoaded', function () {
// 	q = "finger guns"; // search query
	
// 	xhr = new XMLHttpRequest;
// 	xhr.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=MxaNRPUm3i0YZYMEESg7MwTFhErWiEyE&tag=&rating=G', true);
	
// 	xhr.onload = function() {
// 		if (xhr.status >= 200 && xhr.status < 400){
// 			data = JSON.parse(xhr.responseText).data.image_url;
// 			console.log(data);
// 			document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
// 		} else {
// 			console.log('reached giphy, but API returned an error');
// 		 }
// 	};

// 	xhr.onerror = function() {
// 		console.log('connection error');
// 	};

// 	xhr.send();
// });