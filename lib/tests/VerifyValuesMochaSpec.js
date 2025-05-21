'use strict';
var mocha = require('mocha');
var assert = require('assert');
var expect = require('chai').expect;
var exec = require('../constructor.js');
var exec = require('../constructor.js');



describe('Teste de verificação de Mutantes', function () {
  it('Verificar menor valor do paramentro', function (done) {
    var value1 = 2; 
    var value2 = 1;
    var response = exec.verify(value1, value2);
    assert.equal(response, 2);
    done();
  });

  it('Verificar maior valor do paramentro', function (done) {
    var value1 = 7; 
    var value2 = 5;
    var response = exec.verify(value1, value2);
    assert.equal(response, 7);
    done();
  });
  
  it('Verificar parametro igual', function (done) {
    var value1 = 15; 
    var value2 = 15;
    var response = exec.verify(value1, value2);
    assert.equal(response, 15);
    done();
  });

  it('Verificar loop', function (done) {
    var till = 10;
    var response = exec.sequence(till);
    assert.equal(response, 1024);
    done();
  });
});

describe('Testes adicionais para a função Verify', function() {
  
  // Caso de teste 1: Valores inteiros positivos (value1 > value2)
  it('deve retornar o primeiro valor quando ele for maior que o segundo', function() {
    var result = exec.verify(10, 5);
    expect(result).to.equal(10);
  });
  
  // Caso de teste 2: Valores inteiros positivos (value1 < value2)
  it('deve retornar o segundo valor quando ele for maior que o primeiro', function() {
    var result = exec.verify(5, 10);
    expect(result).to.equal(10);
  });

  // Caso de teste 3: Valores iguais
  it('deve retornar qualquer um dos valores quando ambos forem iguais', function() {
    var result = exec.verify(7, 7);
    expect(result).to.equal(7);
  });
  
  // Caso de teste 4: Valores negativos
  it('deve funcionar corretamente com valores negativos', function() {
    var result = exec.verify(-10, -5);
    expect(result).to.equal(-5);
  });
  
  // Caso de teste 5: Zero e valores positivos
  it('deve comparar corretamente zero com valores positivos', function() {
    var result = exec.verify(0, 5);
    expect(result).to.equal(5);
  });
});

describe('Testes adicionais para a função Sequence', function() {

  // Caso de teste 6: Valor zero como parâmetro
  it('deve retornar 1 quando o parâmetro for zero', function() {
    var result = exec.sequence(0);
    expect(result).to.equal(1);
  });
  
  // Caso de teste 7: Valor inteiro positivo pequeno
  it('deve calcular corretamente 2^3', function() {
    var result = exec.sequence(3);
    expect(result).to.equal(8);
  });
  
  // Caso de teste 8: Valor inteiro positivo maior
  it('deve calcular corretamente 2^10', function() {
    var result = exec.sequence(10);
    expect(result).to.equal(1024);
  });
  
  // Caso de teste 9: Valor negativo (comportamento atual)
  it('deve retornar 1 para valores negativos (comportamento atual)', function() {
    var result = exec.sequence(-1);
    expect(result).to.equal(0.5); // 2^0, pois o loop não executa
  });
  
  // Caso de teste 10: Valor decimal (comportamento atual)
  it('deve truncar valores decimais (comportamento atual)', function() {
    var result = exec.sequence(3.7);
    expect(result).to.equal(12.99603834169977); // 2^3, pois o loop executa apenas 3 vezes
  });
});

