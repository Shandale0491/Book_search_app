function bookSearch(event) {
  let search = document.getElementById('book-input').value;
  let apiKey = '&key=AIzaSyBXbAOQnU8C6Cg_0FNdhvYMM';
  document.getElementById('results').innerHTML = '';

  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + search,
    apiKey,
    dataType: 'json',

    success: function(data) {
      console.log(data);
      let moreInfo = 'More Info';
      for (i = 0; i < data.items.length; i++) {
        results.innerHTML += '<h3>' + data.items[i].volumeInfo.title + '</h3>';
        results.innerHTML +=
          '<h5>' + data.items[i].volumeInfo.authors + '</h5>';
        results.innerHTML +=
          '<h6>' + data.items[i].volumeInfo.publisher + '</h6>';
        results.innerHTML +=
          '<img src =' + data.items[i].volumeInfo.imageLinks.thumbnail + '/>';
        results.innerHTML +=
          '<a href=' +
          data.items[i].volumeInfo.infoLink +
          ' target="blank_">' +
          moreInfo +
          '</a>';
      }
    }
  });
}

document.getElementById('button').addEventListener('click', bookSearch, false);

let input = document.getElementById('book-input');
input.addEventListener('keydown', function(event) {
  const enterKeyIsDown = event.keyCode === 13;
  if (enterKeyIsDown) {
    event.preventDefault();
    document.getElementById('button').click();
  }
});
