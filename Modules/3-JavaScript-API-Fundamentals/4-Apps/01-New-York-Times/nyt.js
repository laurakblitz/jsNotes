const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'yIdj1gXha2P6SmdHWQTsysyWkiELKrGT';
let url; //Declaring a variable, not initializing (giving a value)

//Const allows us access to the classes and HTML elements
//SEARCH Form
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
//RESULTS SECTION
const section = document.querySelector('section');

//Setting default look when navigating to API
nav.style.display = 'none';

let pageNumber = 0;
let displayNav = false;
// console.log('PageNumber:', pageNumber); 

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);


function fetchResults(e) {
  // console.log(e);
  e.preventDefault();
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
  console.log('URL:', url);

  if (startDate.value !== '') {
    console.log(startDate.value)
    url += '&begin_date=' + startDate.value;
  }

  if (endDate.value !== '') {
    console.log(endDate.value)
    url += '&end_date=' + endDate.value;
  }

  fetch(url)
    .then(function(result) {
      console.log(result)
      return result.json();
    })
    .then(function(json) {
      console.log(json);
      displayResults(json);
    })
}

function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  let articles = json.response.docs;

  if (articles.length === 0) {
    console.log('No results');
  } else {
    for (let i = 0; i < articles.length; i++) {
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');

      let current = articles[i];
      console.log('Current:', current);

      link.href = current.web_url;
      console.log(link);
      link.textContent = current.headline.main;

      para.textContent = 'Keywords: ';
  
      for (let j = 0; j < current.keywords.length; j++) {
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class', 'clearfix');
      //add class for CSS styling to fix overflow with float elements

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }

  if (articles.length === 10) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}

function nextPage(e) {
  pageNumber++;
  fetchResults(e);
  console.log('Page Number:', pageNumber);
}

function previousPage(e) {
  if (pageNumber > 0) {
    pageNumber--;
    fetchResults(e);
  } else {
    return;
  }

  fetchResults(e);
  console.log('Page:', pageNumber);
}

/*
/This gets us into the API and our key allows us access
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; 
const key = 'S0iwMsrXcgsXcoHQY6IEPYMcGX7NmMMU'; 
let url; //Declaring a variable, not initializing (giving a value)

//The const's allow us access to the classes and HTML elements
//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

//Setting default look when navigating to API
nav.style.display = 'none';

let pageNumber = 0;
let displayNav = false;
// console.log('PageNumber:', pageNumber)

//Submit or click of buttons, will call the below functions                          
searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); 
previousBtn.addEventListener('click', previousPage); 

function fetchResults(e) { //Declaring the function fetchResults and giving it a param of e
    e.preventDefault(); //e is in reference to the search, prevent default stops it from refreshing the page
    //Assemble the full URL
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //We initialize URL inside of the function
    console.log("URL:", url);

    if(startDate.value !== '') { //If there is a start date run this
      console.log(startDate.value)
      url += '&begin_date=' + startDate.value; //Includes the start date into the search
    }
  
    if(endDate.value !== '') { //If there is an end date inputed run this
      console.log(endDate.value)  
      url += '&end_date=' + endDate.value; //Includes end date into the search
      }

    fetch(url) //This is the fetch request using the URL we made inside this function
      .then(function(result) { //Get the results
        console.log(result)
        return result.json(); //Convert the results into JSON
     }) 
     .then(function(json){ //Function of the results in JSON
      console.log(json); 
      displayResults(json); //Display the JSON results with a callback function
    });
}

  function displayResults(json) { //Creating displayResults(json)
    while (section.firstChild) { //While loop //Don't want results on top of results, must clear them out and then add new ones
      section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    if (articles.length === 0) { //If no results, print no results
      console.log("No results");
    } else {
        for (let i = 0; i < articles.length; i++) { //Since we will have no results, this is how we'll go about displaying them
          let article = document.createElement('article');
          let heading = document.createElement('h2');
          let link = document.createElement('a'); 
          let img = document.createElement('img');
          let para = document.createElement('p');  
          let clearfix = document.createElement('div'); //Clearfix just so display within div

          let current = articles[i]; //This takes whatever articles we can find, and will label it as current??
          console.log("Current:", current);

          link.href = current.web_url; //This will take wherever we've established as "current" and create a link for it
          console.log(link);
          link.textContent = current.headline.main; //Displaying our headlines as clickable links

          para.textContent = 'Keywords: '; //Pulls and displays the keywords

          for (let j = 0; j < current.keywords.length; j++) { //Sets up a for loop to print each keyword
            let span = document.createElement('span'); //Creates a span to group the individual keywords inside
            span.textContent += current.keywords[j].value + ' '; //Adds the keyword that the for loop is currently on to the string
            para.appendChild(span); //Adds the para as a child of the span element
          }

          if (current.multimedia.length > 0) { //Essentially, if its an article, and has an image, display it
            img.src = 'http://www/nytimes.com/' + current.multimedia[0].url; //Telling us where to pull the image
            img.alt = current.headline.main; //If no image, just display the available information
          }

          clearfix.setAttribute('class', 'clearfix'); //The "class" will be clearfixed into its DIV

          article.appendChild(heading); //This is giving us what we'll get from our results (Think of it like a lego set)
          heading.appendChild(link);
          article.appendChild(img);
          article.appendChild(para);
          article.appendChild(clearfix);
          section.appendChild(article);
      } //Closes the for loop
    } //Closes the else statement

      if (articles.length === 10) {
        nav.style.display = "block";
      } else {
        nav.style.display = "none";
      }
  } //Closes entire function

    function nextPage(e) { //This function is what allows us to go to the next page
      pageNumber++;
      fetchResults(e); //Click a button, next page
      console.log("Page number:", pageNumber); //Running this will tell us what page number we're on
    };

    function previousPage(e) { //Allows us to go back a page
      if(pageNumber > 0) { //If the page we're on has a 'VALUE' of more than o, then we go back a page
        pageNumber--; //However, if we're not on a page with a 'VALUE' greater than 0
        fetchResults(e);
      } else { //Do nothing!
        return;
      }

      fetchResults(e);
      console.log("Page:", pageNumber);//Regardless of our 'IF ELSE' up above. this will tell us which page number we're on
    };
    */