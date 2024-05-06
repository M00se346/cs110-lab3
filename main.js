//ex_link = 'https://jsonplaceholder.typicode.com/todos/1';
NYT_link = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo"

var sortBy = ["viewed", "shared", "emailed"]; 
var timeFrame = [1, 7, 30]; 

var start = "https://api.nytimes.com/svc/mostpopular/v2/";

var end = ".json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo";

// Click the special button automatically
//specialButton.click();

//initially have 'viewed' and '1' clicked.
var global_i = 0, global_j = 0;

var sortBy = ["viewed", "shared", "emailed"]; 
var timeFrame = [1, 7, 30]; 

var start = "https://api.nytimes.com/svc/mostpopular/v2/";

var end = ".json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo";

// fetch(NYT_link)
// .then(response => response.json())
// .then(data => {
// console.log(data);

// data.results.map(article=>{
// console.log(article.title);

// })

// })

  /*
async function getResponse_SB(i){
    global_i = i;
    const response = await fetch(start + sortBy[i]+ "/"+ timeFrame[global_j] + end);
    const data = await response.json();
    console.log(data);
  
    document.getElementById('title0').innerHTML = data.results[0].title;
    document.getElementById('date').innerHTML = data.results[0].published_date;
    document.getElementById('image').src = data.results[0].media[0]["media-metadata"][0].url
    //data.results[0].url;
    document.getElementById('snippet').innerHTML = data.results[0].abstract;


}

*/




async function getResponse_SB(i){
    global_i = i;
    const response = await fetch(start + sortBy[i]+ "/"+ timeFrame[global_j] + end);
    const data = await response.json();
    console.log(data);
    
    for (let k = 0; k < 5; k++) {
        let titleX = 'title' + k;
        let dateX = 'date' + k;
        let imageX = 'image' + k;
        let snippetX = 'snippet' + k;
        console.log(titleX);
        document.getElementById(titleX).innerHTML = data.results[k].title;
        document.getElementById(dateX).innerHTML = data.results[k].published_date;
        document.getElementById(imageX).src = data.results[k].media[0]["media-metadata"][0].url
        document.getElementById(snippetX).innerHTML = data.results[k].abstract;
    }


}





async function getResponse_TF(j){
  global_j = j;
  const response = await fetch(start + sortBy[global_i]+ "/"+ timeFrame[j] + end);
  const data = await response.json();
  console.log(data);
  
  for (let k = 0; k < 5; k++) {
    let titleX = 'title' + k;
    let dateX = 'date' + k;
    let imageX = 'image' + k;
    let snippetX = 'snippet' + k;
    console.log(titleX);
    document.getElementById(titleX).innerHTML = data.results[k].title;
    document.getElementById(dateX).innerHTML = data.results[k].published_date;
    document.getElementById(imageX).src = data.results[k].media[0]["media-metadata"][0].url
    document.getElementById(snippetX).innerHTML = data.results[k].abstract;
    }
  

}