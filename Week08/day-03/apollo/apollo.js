let apollo = new XMLHttpRequest();
apollo.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=b48d1aaaadca4fd0a6aa4cf08a0e15e3', true);
apollo.onload = () => {
  let data = JSON.parse(apollo.responseText);
  console.log(data.response.docs);

  data.response.docs.forEach((e, i) => {
    let a = document.createElement('a');
    let b = document.createElement('b');

    a.innerText = data.response.docs[i].headline.main + `\n`;
    a.href = data.response.docs[i].web_url;
    document.querySelector('div').appendChild(a);

    p.innerText = data.response.docs[i].snippet + `\n`;
    a.href = data.response.docs[i].pub_date + `\n`;
    document.querySelector('div').appendChild(p);
  })
};
apollo.send();