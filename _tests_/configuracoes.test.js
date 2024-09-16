// configuracoes.test.js

function salvarConfiguracoes(config) {
    return config;
  }
  
  test('Verifica se as configurações são salvas corretamente', () => {
    let configSalva = salvarConfiguracoes({ facebookLimit: 30, twitterLimit: 20 });
    expect(configSalva.facebookLimit).toBe(30);
    expect(configSalva.twitterLimit).toBe(20);
  });  
