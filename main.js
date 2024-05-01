//this needs to be the external link to the API stuff from NYtimes?

//ex_link = 'https://jsonplaceholder.typicode.com/todos/1';
NYT_link = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

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


async function getResponse(){


    const response = await fetch(NYT_link);
    const data = await response.json();
    console.log(data.headline);
    document.getElementById('test').innerHTML = data.headline;
    


}
