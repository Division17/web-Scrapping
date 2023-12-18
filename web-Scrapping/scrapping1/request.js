
const request = require('request');
request('http://www.google.com', cb)
console.log("Before")
function cb(error, response, html) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('html:', html); // Print the HTML for the Google homepage.
  };
  console.log("After")