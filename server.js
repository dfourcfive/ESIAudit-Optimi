var express =require("express");
var mongoose= require("mongoose");
var config = require("./configs/config");
const app = express();
const cors = require("cors");



//connect to the database
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	if(!err){
		console.log("successful connection to the mongodb");
    }
    else {
        console.log(err);
    }
 });

 var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to EsiAudit-Optimisation application." });
});
//routes
require('./routes/gate.route')(app);
require('./routes/saver.route')(app);


const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
