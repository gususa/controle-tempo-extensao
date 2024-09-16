// relatorios.test.js

function gerarRelatorio(tempos) {
    return `Total de minutos usados: ${tempos.reduce((acc, tempo) => acc + tempo, 0)}`;
  }
  
  test('Verifica se o relatório semanal é gerado corretamente', () => {
    let relatorio = gerarRelatorio([50, 60, 70]); // Simulando 3 dias de uso
    expect(relatorio).toBe('Total de minutos usados: 180');
  });  
