NYT_link = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo" ;

// fetch(NYT_link)
//       .then(response => response.json())
//       .then(json => console.log(json))


async function getResponse(num_string){

    const response = await fetch(NYT_link);
    const data = await response.json();
    console.log(data);
    document.getElementById('test').innerHTML = data.results[num_string].title;

}
