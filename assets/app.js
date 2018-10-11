function bookSearch() {
  let search = document.getElementById("book-input").value;
  let apiKey = "&key=AIzaSyBXbAOQnU8C6Cg_0FNdhviJ0bNJ5O2FYMM";
  // let url = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
  document.getElementById("results").innerHTML = "";

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    apiKey,
    dataType: "json",

    success: function(data) {
      let moreInfo = "More Info";
      for (i = 0; i < data.items.length; i++) {
        results.innerHTML += "<h3>" + data.items[i].volumeInfo.title + "</h3>";
        results.innerHTML +=
          "<h5>" + data.items[i].volumeInfo.authors + "</h5>";
        results.innerHTML +=
          "<h6>" + data.items[i].volumeInfo.publisher + "</h6>";
        results.innerHTML +=
          "<img src =" + data.items[i].volumeInfo.imageLinks.thumbnail + "/>";
        results.innerHTML +=
          "<a href=" +
          data.items[i].volumeInfo.infoLink +
          ">" +
          moreInfo +
          "</a>";
      }
    },

    type: "GET"
  });
}

document.getElementById("button").addEventListener("click", bookSearch, false);
