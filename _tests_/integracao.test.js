// integracao.test.js

function monitorarTempo(tempo) {
  return tempo;
}

function emitirAlerta(tempoUso, limite) {
  if (tempoUso >= limite) {
    return 'Você excedeu o tempo limite!';
  }
  return 'Dentro do limite';
}

test('Verifica se o temporizador e alerta estão integrados corretamente', () => {
  let tempoUso = monitorarTempo(30); // Simulando 30 minutos de uso
  let alerta = emitirAlerta(tempoUso, 25); // Limite de 25 minutos
  expect(alerta).toBe('Você excedeu o tempo limite!'); // Espera que o alerta seja emitido
});
  