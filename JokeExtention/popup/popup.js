
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit', true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
  
    if (request.status >= 200 && request.status < 400) {
      console.log(data.setup)
      console.log(data.delivery)
      document.querySelector('#theJoke').innerHTML = data.setup;
      
      document.querySelector('#ans').innerHTML = data.delivery;
    } else {
      console.log('error')
    }
  }

request.send()

document.getElementById("btn").addEventListener("click", function() {
    location.reload();
}); 