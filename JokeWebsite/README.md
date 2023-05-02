# Dad Joke Generator

This is a simple web application that generates a random dad joke when the "Get Joke" button is clicked. The joke is fetched from the "icanhazdadjoke" API using AJAX requests.

## Prerequisites
To run this code, you need a web browser that supports HTML5, CSS3, and JavaScript. 

## How to Use
1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Click the "Get Joke" button to generate a new dad joke.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- jQuery

## How it Works
The web page has a single button that calls the `getJoke()` function when clicked. This function sends an AJAX request to the "icanhazdadjoke" API to fetch a random joke. The API returns a JSON object that contains the joke text. The function then updates the text of the paragraph element with the `id` "joke" with the fetched joke.

## Credits
- [icanhazdadjoke API](https://icanhazdadjoke.com/api)
