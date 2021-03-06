var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');

var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});

var Person = mongoose.model("Person", personSchema);
Person.update({age: 25}, {nationality: "American"}, function(err, response){
    console.log(response);
 });

app.get('/people', function(req, res){
   Person.find(function(err, response){
      res.json(response);
   });
});


app.get('/people/:id', function(req, res){
    Person.find(function(err, response){
       res.json(response);
    });
 });
app.listen(3000);