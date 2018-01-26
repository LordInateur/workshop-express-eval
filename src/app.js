const express = require('express');
const fs = require('fs');

const app = express();

app.get('/bingo', function(req, res) {
  getBingo(req.query.mynumbers, (err, data) => {
    if(err){
      res.status(400);
      res.end(JSON.stringify(err))
    }else{
      res.status(200);
      res.end(data)
    }
  })
});

function getBingo(stringNumbersList, callback){
  getfile('src/numbers.txt', (err, data) => {
    if(err){
      callback(err, undefined);

    }else{
      resList = data.split('\r\n').slice(0,-1).map(value=>Number(value)).sort() //.join()
      nbExpectedNumber = resList.length

      if(stringNumbersList.split(',').length == nbExpectedNumber){
        try {
          guestList = stringNumbersList.split(',').map(value=>Number(value)).sort()
          if (victoryTest(resList, guestList)){
          	callback(undefined, 'Bingo !!!\nres was : ' + resList.join());
          }else{
          	callback(undefined, 'Try again :)');
          }
        }
        catch(error){
          callback('You should pass a list of numbers', undefined)
        }
      }else{
        callback('You should give exaclty ' + nbExpectedNumber + ' numbers to start the game.', undefined )
      }
      
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

function victoryTest (arr1, arr2){
  if(arr1.length == arr2.length){
    for (var i = 0 ; i < arr1.length ; i++ ){
      if(arr1[i] != arr2[i]){
        return false
      }
    }
  	return true
  }else{
  	return false
  }
}

module.exports = app;