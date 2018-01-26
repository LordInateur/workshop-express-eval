const express = require('express');
const fs = require('fs');

const app = express();

app.get('/bingo', function(req, res) {
  res.status(200);
  getBingo((err, data) => {
    if(err){
      res.status(400);
      res.end(JSON.stringify(err))
    }else{
      res.status(200);
      res.end(data)
    }
  })
});

function getBingo(callback){
  getfile('src/numbers.txt', (err, data) => {
    if(err){
      callback(err, undefined);
    }else{
      callback(undefined, data.split('\r\n').slice(0,-1).join());
    }
  })
}

function getfile(filePath, callback){
  fs.readFile(filePath, (err, data) =>{
    if(err){
      callback(err, undefined);
    }else{
      callback(undefined, data.toString());
    }
  });
}
module.exports = app;