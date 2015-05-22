'use strict';
var mocha = require('mocha');
var assert = require('assert');
var exec = require('../constructor');


describe('Teste de verificação de Mutantes', function () {
  it('Verificar menor valor do paramentro', function (done) {
    var value1 = 1; 
    var value2 = 2;
    var response = exec.Verify(value1, value2);
    assert.equal(response, 2);
    done();
  });

  it('Verificar maior valor do paramentro', function (done) {
    var value1 = 7; 
    var value2 = 5;
    var response = exec.Verify(value1, value2);
    assert.equal(response, 7);
    done();
  });
  
  it('Verificar parametro igual', function (done) {
    var value1 = 15; 
    var value2 = 15;
    var response = exec.Verify(value1, value2);
    assert.equal(response, value1);
    done();
  });

  it('Verificar loop', function (done) {
    var till = 10;
    var response = exec.Sequenc(till);
    assert.equal(response, 1024);
    done();
  });


});