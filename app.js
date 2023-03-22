// Write an async function called getQuote
// Use the fetch API to make a request to the API `https://meowfacts.herokuapp.com/` and store the response in
// a variable called response
// Call the JSON method on the response variable to parse the JSON data contained in the response object. 
// Store the value of the returned promise in a variable called data
// Use that data to set the text of h1 with id "quote"
// Call the function so that the quote appears as the page loads
// Attach an event listener to the button on the page with id "new-quote-button" to call getQuote when the user clicks

async function getQuote() {  
    const response = await fetch("https://meowfacts.herokuapp.com/"); 
    const data = await response.json();
    document.getElementById("quote").innerText = data.data;
    addQuote(data.data);
    }

getQuote();

document.getElementById("new-quote-button").addEventListener("click", getQuote); 

// Create a function that takes in a string, creates a new list item with that string, and then adds it to the ol with the id "quote-history"
// Call the function within your "getQuote" function so that the quotes are stored in the "quote-history" list
// Limit the function so that repeat quotes are ignored

function addQuote(quote) { 
    const historyList = document.createElement("ol");                   //create a new list item
    historyList.innerText = quote;                                     //set the text of the list item to the quote
    document.getElementById("quote-history").appendChild(historyList); //add the list item to the ol with the id "quote-history"
    
}




