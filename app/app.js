let express = require('express');

let app = express();
const PORT = 8080;

// This defines a resource at "/" for "GET" on our API.
app.get('/', getHandler);

function getHandler(request, response) {
    response.send("Welcome!");
    console.log("We just got a GET request at '/' in our API!");
}

// Tells the Express framework what port to use.
app.listen(PORT, () => {
    console.log("Listening on " + PORT);
});