//Initialize Express
var express = require('express')
var app = express();
app.use(express.static("public"));
// Set the View Engine to EJS Templating and Use the Public Directory within the Root Directory as a Place to Serve Files
app.set('view engine', 'ejs');
app.get("/", function(req, res){
    // Send basic HTML text to test if our first route works
        //res.send("<h1>Our Basic Shell of an Application Works!</h1>");
    // Render the basic Materialize Template with Stylesheet/Scripts
    res.render("landing");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started and is Running on Port " + process.env.PORT + " and IP Address " + process.env.IP); 
});