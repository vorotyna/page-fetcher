const request = require('request'); // HTTP request
const fs = require('fs'); // writing to file
const args = process.argv.slice(2); // takes command line arguments

let url = args[0]; // URL
let path = args[1]; // Path

// Making HTTP requests using request package
request(url, (error, response, body) => {
  // Writing to the file
  fs.writeFile(path, body, (error) => {
    if (error) {
      console.log('Error: ', error);
    } else {
      let fileSize = fs.statSync(path).size; // ==> Finding the file size
      console.log(`Downloaded and saved ${fileSize} bytes to ${path}`);
    }
  });
});