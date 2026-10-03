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

### Fontes gratuitas

- ESPN: calendário e resultados do Benfica em todas as competições que o fornecedor cobre, e classificação da Liga. A consulta real em 03/10/2026 devolveu os 34 jogos da Liga, 14 jogos europeus (incluindo pré-eliminatórias) e os 18 clubes da classificação. Os endpoints públicos responderam com CORS `*`, sem conta ou chave. Não constituem uma API contratada: podem mudar ou falhar.
- [Liga Portugal](https://www.ligaportugal.pt/calendars-ics/sl_benfica.ics): calendário oficial ICS. Um coletor em Python, sem dependências, recolhe os jogos da Allianz Cup; GitHub Actions executa a cada seis horas e permite execução manual. Este agendamento só fica ativo depois de integrar a alteração no ramo principal. Num repositório público, este uso de Actions é gratuito.
- O JSON oficial é consultado diretamente no ramo principal para não depender de um novo build de Pages após o commit automático. Há alternativa no ficheiro local. Dados com mais de 24 horas são rejeitados e o estado anterior é preservado.
- TheSportsDB: alternativa se a ESPN não devolver dados utilizáveis; as limitações do plano gratuito são identificadas na aplicação.

Cobertura ainda por validar: Taça de Portugal, resultados da Taça da Liga e estados de qualificação/eliminatórias. O calendário oficial não contém resultados: nunca se deduz um resultado a partir do horário. A recolha é periódica; não há garantia de resultados em direto nem disponibilidade contínua dos fornecedores.

Horários provisórios da ESPN (`timeValid=false`) são apresentados como hora por confirmar. Datas e horários oficiais da Taça da Liga substituem os dados de base; Benfica–Gil Vicente foi corrigido de 27 para 29/10/2026, às 20h45 de Portugal.

### Verificação

```bash
node --test tests/*.test.cjs
python3 -m unittest discover -s tests -p '*_test.py'
```

Os testes incluem respostas reais reduzidas, recolhidas em 03/10/2026, além de falhas de rede, temporadas erradas, classificações incompletas, horários provisórios, cache e funcionamento offline. Consultas HTTP reais verificaram a cobertura e o cabeçalho CORS da ESPN; o fluxo no navegador continua por verificar antes da reabertura.

## Marcas e emblemas

Projeto não oficial e sem afiliação com o SL Benfica, Liga Portugal, FPF ou UEFA. Os nomes, emblemas e logótipos pertencem aos respetivos titulares e são apresentados apenas para identificar clubes e competições.
