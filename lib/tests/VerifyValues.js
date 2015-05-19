'use strict';
var mocha = require('mocha');
var assert = require('assert');
var exec = require('../constructor');


describe('Teste de verificação de Mutantes', function () {
  it('Verificação de valor zero, negação de 0 é 1, errado, pois o zero é convertido em 1 e o teste quebra, entra na 1 condição', function (done) {
    var value1 = 1; 
    var value2 = 2;

    var response = exec.Verify(value1, value2);
    //console.log(response);
    assert.equal(response, 2);
    done();
  });

  it('Verificar valor parte2', function (done) {
    var value1 = 2; 
    var value2 = 1;

    var response = exec.Verify(value1, value2);
    assert.equal(response, 2);
    done();
  });

});