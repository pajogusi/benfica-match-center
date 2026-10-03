# Benfica Match Center

Web app não oficial para acompanhar a equipa principal de futebol do SL Benfica na época 2026/27.

## Estrutura da versão 2

- abertura centrada no próximo jogo;
- cartões de todas as principais competições relevantes da época;
- estados: Em curso, Qualificado, Acesso condicionado e Não qualificado;
- cada cartão abre uma área própria com Classificação/Estado e Calendário/Resultados;
- tabela da Liga Portugal;
- percurso das provas a eliminar sem inventar uma classificação por pontos;
- responsiva e preparada para GitHub Pages/PWA.

Os dados-base foram verificados em 22/08/2026 em fontes oficiais do SL Benfica, Liga Portugal, FPF e UEFA. Horários e sorteios podem sofrer alterações.

## Atualização dos dados

A página inicial continua em manutenção. A aplicação preservada está em
`benfica.html`; esta alteração não reabre o site ao público.

- Consulta ao abrir, botão “Atualizar dados”, nova consulta a cada cinco minutos enquanto a página está visível e ao regressar após esse intervalo.
- Pedidos com limite de dez segundos, sem consultas concorrentes e com intervalo mínimo de trinta segundos.
- Falhas, respostas vazias e dados parciais são identificados; nunca são apresentados como atualização completa.
- Resultados sem golos válidos e dados de outras épocas são rejeitados.
- Classificações incompletas não substituem a tabela anterior. Uma tabela completa atualiza também o texto do cartão da Liga e preserva a ordem fornecida pela fonte.
- Cache por época com validade de 24 horas. Guardar dados não os transforma em dados em direto.
- O service worker só trata recursos locais e preserva caches de outras aplicações.

### Limite da fonte atual

O código usa a chave gratuita 123 do TheSportsDB. A
[documentação do fornecedor](https://www.thesportsdb.com/documentation)
limita os pedidos de próximo/último jogo a um jogo em casa e a consulta
de classificação a cinco linhas. Esta fonte não garante calendário completo,
jogos fora, classificação completa nem resultados em direto.
Os estados das restantes competições continuam a ser dados de base, identificados
como tal. A aplicação só deve sair da manutenção depois de validar uma fonte
com cobertura suficiente, os dados reais da época e o fluxo no navegador.

### Verificação

Com Node.js instalado, executar:

```bash
node --test tests/*.test.cjs
```

Os testes usam respostas simuladas: verificam o comportamento da aplicação,
não a disponibilidade, CORS ou cobertura real do fornecedor.

## Marcas e emblemas

Projeto não oficial e sem afiliação com o SL Benfica, Liga Portugal, FPF ou UEFA. Os nomes, emblemas e logótipos pertencem aos respetivos titulares e são apresentados apenas para identificar clubes e competições.
