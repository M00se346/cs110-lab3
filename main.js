//this needs to be the external link to the API stuff from NYtimes?

//ex_link = 'https://jsonplaceholder.typicode.com/todos/1';
NYT_link = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo"

// fetch(NYT_link)
//       .then(response => response.json())
//       .then(json => console.log(json))



/* 
EXAMPLE:

async function fetchMoviesJSON() {
  const response = await fetch('/movies');
  const movies = await response.json();
  return movies;
}

fetchMoviesJSON().then(movies => {
  movies; // fetched movies
});

*/

//initially have 'viewed' and '1' clicked.
var global_i = 0, global_j = 0;

var sortBy = ["viewed", "shared", "emailed"]; 
var timeFrame = [1, 7, 30]; 

var start = "https://api.nytimes.com/svc/mostpopular/v2/";

var end = ".json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo";





// clicked button when first load
const specialButton = document.getElementById('startSB');

// Click the special button automatically
specialButton.click();

// document.getElementById("startSB").click().css('background', 'green');
// document.getElementById("startTF").click().css('background', 'green');


async function getResponse_SB(i){
    global_i = i;
    const response = await fetch(start + sortBy[i]+ "/"+ timeFrame[global_j] + end);
    const data = await response.json();
    console.log(data);
    document.getElementById('test').innerHTML = data.results[0].title;

}

async function getResponse_TF(j){
  global_j = j;
  const response = await fetch(start + sortBy[global_i]+ "/"+ timeFrame[j] + end);
  const data = await response.json();
  console.log(data);
  document.getElementById('test').innerHTML = data.results[0].title;

}