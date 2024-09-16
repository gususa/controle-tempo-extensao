// alerta.test.js

function emitirAlerta(tempoUso, limite) {
    if (tempoUso >= limite) {
      return 'Você excedeu o tempo limite!';
    }
    return 'Dentro do limite';
  }
  
  test('Verifica se o alerta é emitido ao atingir o limite', () => {
    let alerta = emitirAlerta(30, 25); // Simula 30 minutos de uso e limite de 25
    expect(alerta).toBe('Você excedeu o tempo limite!');
  });  
