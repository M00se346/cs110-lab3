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
  
    document.getElementById('title0').innerHTML = data.results[0].title;
    document.getElementById('date').innerHTML = data.results[0].published_date;
    document.getElementById('image').src = data.results[0].media[0]["media-metadata"][0].url
    //data.results[0].url;
    document.getElementById('snippet').innerHTML = data.results[0].abstract;


}




// async function getResponse_SB(i){
//     global_i = i;
//     const response = await fetch(start + sortBy[i]+ "/"+ timeFrame[global_j] + end);
//     const data = await response.json();
//     console.log(data);
//     let temp = 'title';
//     for (let k = 0; k < 5; k++) {
//         document.getElementById(temp + k).innerHTML = data.results[k].title;
//         // document.getElementById('date').innerHTML = data.results[k].published_date;
//         // document.getElementById('date').src = data.results[k].url;
//         // document.getElementById('snippet').innerHTML = data.results[k].abstract;
//         temp = 'title';
//     }



// }

async function getResponse_TF(j){
  global_j = j;
  const response = await fetch(start + sortBy[global_i]+ "/"+ timeFrame[j] + end);
  const data = await response.json();
  console.log(data);
  document.getElementById('test').innerHTML = data.results[0].title;
}