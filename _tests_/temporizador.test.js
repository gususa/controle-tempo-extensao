// temporizador.test.js

function monitorarTempo(tempo) {
    return tempo;
  }
  
  test('Verifica se o monitoramento de tempo está correto', () => {
    let tempoUso = monitorarTempo(10); // Simulando 10 minutos
    expect(tempoUso).toBe(10); // Espera que a função retorne 10
  });  
