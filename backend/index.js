const express = require('express');
const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
const cors = require('cors');
const app = express();

app.use(cors());

var url = "mongodb+srv://vara:vara@mycluster.zucif.gcp.mongodb.net/beetle?retryWrites=true&w=majority"
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function (callback) {
    console.log('Successfully connected to MongoDB.');
});

var Branch = require('./Models/Branch').Branch;
    /*
    csvtojson()
	  .fromFile("./Models/inputFile.csv")
	  .then(csvData => {
	  	brancesList = [];
	    for(let i = 0; i < csvData.length ; i++){
	    	var fieldkeys = Object.keys(csvData[0]);
            //console.log(csvData[i][fieldkeys[6]].split(',').map(num=> num.trim()!='' ? Number(num) : null).filter((num)=> {return num!=null}) );
	    	var branch = new Branch({
                institutionName : csvData[i][fieldkeys[0]],
                branchName : csvData[i][fieldkeys[1]],
                address : csvData[i][fieldkeys[2]],
                city : csvData[i][fieldkeys[3]],
                contactNumbers : csvData[i][fieldkeys[4]].split(',').map(num=> num.trim()),
                branchInchanrge : csvData[i][fieldkeys[5]],
                Pincodes : csvData[i][fieldkeys[6]].split(',').map(num=> num.trim()!='' ? Number(num) : null).filter((num)=> {return num!=null})
	    	})
	    	brancesList.push(branch);
	    }
        Branch.insertMany(brancesList,(err,data)=>{
            if(err) throw err;
            console.log('success');
        });
      });
      */

app.get('/',(req,res)=>{
    res.send("helo world");
})

app.get('/search/:pin',(req,res)=>{
    Branch.find({ Pincodes : { $all : [Number(req.params.pin)]}},(err,data)=>{
        res.send(data);
    });
})
port = process.env.PORT || 8080;

app.listen(port,(err)=>{
    if(err) throw err;
    console.log("server started at "+port);
});