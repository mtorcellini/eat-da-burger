const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgersController");
const PORT = process.env.PORT || 8080;
const app = express();

// Serve static files (css and js);
app.use(express.static("public"));

// Set up handlebars
app.engine("handlebars", exphbs({defaultLayout : "main"}));
app.set("view engine", "handlebars");

// allow body parsing
app.use(express.urlencoded());

// Give server acceess to burgersController
app.use(routes);

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

