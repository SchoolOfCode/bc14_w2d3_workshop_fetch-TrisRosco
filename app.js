// Write an async function called getQuote
// Use the fetch API to make a request to the API `https://zenquotes.io/api/random/` and store the response in
// a variable called response
// Call the JSON method on the response variable to parse the JSON data contained in the response object. 
// Store the value of the returned promise in a variable called data
// Use that data to set the text of h1 with id "quote"
// Call the function so that the quote appears as the page loads
// Attach an event listener to the button on the page with id "new-quote-button" to call getQuote when the user clicks
async function getQuote() {
    const response = await fetch("https://zenquotes.io/api/random/");
    const data = await response.json();
    document.getElementById("quote").textContent = data[0].q;
    }

getQuote();

document.getElementById("new-quote-button").addEventListener("click", getQuote);

 

