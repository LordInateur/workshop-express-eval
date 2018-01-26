var expect = require('chai').expect;

const superagent = require('superagent');
const host = 'http://localhost:3000';
const urlAPI = '/bingo';

describe('Bingo', function() {

  it('/bingo should return default txt', 
  	function(done) {
        superagent.get(`${host}${urlAPI}`)
          .end(function(e, res) {
            expect(res.status).to.eql(200);
            done();
          });
      });
    expect(true).to.be.true;
 });



// todo the forgoten test ...
//The bingo game is already started and known numbers are 31, 10, 80, 44, 66