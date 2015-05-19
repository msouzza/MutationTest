'use strict';
var mocha = require('mocha');
var assert = require('assert');
var exec = require('../constructor');


describe('Teste de verificação de Mutantes', function () {
  it('Verificação de valor zero, negação de 0 é 1, errado, pois o zero é convertido em 1 e o teste quebra, entra na 1 condição', function (done) {
    var value1 = 0;
    var value2 = 0;

    var response = exec.Verify(value1, value2);

    assert.equal(response, 'values are equals');
    done();
  });

});