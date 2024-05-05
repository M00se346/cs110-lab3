NYT_link = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo"

//initially have 'viewed' and '1' clicked.
var global_i = 0, global_j = 0;

var sortBy = ["viewed", "shared", "emailed"]; 
var timeFrame = [1, 7, 30]; 

var start = "https://api.nytimes.com/svc/mostpopular/v2/";

var end = ".json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo";

// Click the special button automatically
//specialButton.click();

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
  //console.dir(data);
  console.log("hi"+ (data.results[0].media[0]["media-metadata"]).url);
  console.log(data);
  document.getElementById('test').innerHTML = data.results[0].title;
  
  document.getElementById('img').src = (data.results[0].media[0].media-metadata[0]).url;
  

}