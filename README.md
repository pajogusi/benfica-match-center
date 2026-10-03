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

A aplicação foi reaberta em 03/10/2026 em https://pajogusi.github.io/benfica-match-center/.
`index.html` e `benfica.html` apresentam a mesma interface. A publicação no GitHub Pages foi concluída e verificada no navegador.

- Consulta ao abrir, botão “Atualizar dados”, nova consulta a cada cinco minutos enquanto a página está visível e ao regressar após esse intervalo.
- Pedidos com limite de dez segundos, sem consultas concorrentes e com intervalo mínimo de trinta segundos.
- Falhas, respostas vazias e dados parciais são identificados; nunca são apresentados como atualização completa.
- Resultados sem golos válidos e dados de outras épocas são rejeitados.
- Classificações incompletas não substituem a tabela anterior. Uma tabela completa atualiza também o texto do cartão da Liga e preserva a ordem fornecida pela fonte.
- Cache por época com validade de 24 horas. Guardar dados não os transforma em dados em direto.
- O service worker só trata recursos locais e preserva caches de outras aplicações.

### Fontes gratuitas

- ESPN: calendário e resultados do Benfica em todas as competições que o fornecedor cobre, e classificação da Liga. A consulta real em 03/10/2026 devolveu os 34 jogos da Liga, 14 jogos europeus (incluindo pré-eliminatórias) e os 18 clubes da classificação. Os endpoints públicos responderam com CORS `*`, sem conta ou chave. Não constituem uma API contratada: podem mudar ou falhar.
- [Liga Portugal](https://www.ligaportugal.pt/calendars-ics/sl_benfica.ics): calendário oficial ICS. Um coletor em Python, sem dependências, recolhe os jogos da Allianz Cup; GitHub Actions executa a cada seis horas e permite execução manual. O agendamento está ativo no ramo principal e a execução inicial foi concluída com sucesso. Num repositório público, este uso de Actions é gratuito.
- O JSON oficial é consultado diretamente no ramo principal para não depender de um novo build de Pages após o commit automático. Há alternativa no ficheiro local. Dados com mais de 24 horas são rejeitados e o estado anterior é preservado.
- TheSportsDB: alternativa se a ESPN não devolver dados utilizáveis; as limitações do plano gratuito são identificadas na aplicação.

A classificação completa da Liga Europa usa a ESPN e exige 36 equipas, posições únicas, Benfica presente e época correta. Inclui jogos, vitórias, empates, derrotas, golos e pontos, com destaque para o Benfica e zonas de apuramento. Atualiza a cada cinco minutos e preserva a última tabela válida até 24 horas se a consulta falhar.

Cobertura ainda por validar: resultados da Taça da Liga e estados de qualificação das restantes competições. O calendário oficial não contém resultados: nunca se deduz um resultado a partir do horário. A recolha é periódica; não há garantia de resultados em direto nem disponibilidade contínua dos fornecedores.

Horários provisórios da ESPN (`timeValid=false`) são apresentados como hora por confirmar. Datas e horários oficiais da Taça da Liga substituem os dados de base; Benfica–Gil Vicente foi corrigido de 27 para 29/10/2026, às 20h45 de Portugal.

### Taça de Portugal

A ESPN também fornece a Taça de Portugal, gratuitamente e com CORS `*`. Há consultas específicas aos resultados e próximos jogos do Benfica, independentes do calendário geral. Em 03/10/2026, a consulta da época atual devolveu legitimamente zero jogos publicados; a mesma fonte devolveu os quatro jogos do Benfica em 2025/26 e resultados da 2.ª eliminatória de 2026/27. A Liga Portugal confirmou a isenção do Benfica na 3.ª eliminatória. O cartão mantém o adversário por sortear, sem inventar um jogo.

Quando a fonte publicar um jogo, a aplicação substitui o marcador de sorteio (incluindo jogos fora), apresenta a eliminatória correta, atualiza resultados e usa o vencedor explícito do fornecedor para indicar apuramento ou eliminação. Um empate sem vencedor, incluindo decisões por penáltis ainda incompletas, fica por confirmar. Jogos de épocas anteriores são rejeitados. As respostas reais de 2025/26 validam o esquema; testes sintéticos simulam jogos de 2026/27 ainda não publicados e estão identificados como tal.

A consulta atual foi verificada por HTTP; a receção automática do futuro sorteio ainda não pode ser comprovada com um jogo real da época atual. Falhas da consulta da Taça são identificadas mesmo quando a Liga recebe dados.

### Verificação

```bash
node --test tests/*.test.cjs
python3 -m unittest discover -s tests -p '*_test.py'
```

Os testes incluem respostas reais reduzidas, recolhidas em 03/10/2026, além de falhas de rede, temporadas erradas, classificações incompletas, horários provisórios, cache e funcionamento offline. Consultas HTTP reais verificaram a cobertura e o cabeçalho CORS da ESPN; o fluxo no navegador público foi verificado após a reabertura, com dados ESPN recebidos, 18 clubes na classificação e o calendário oficial da Taça da Liga.

## Marcas e emblemas

Projeto não oficial e sem afiliação com o SL Benfica, Liga Portugal, FPF ou UEFA. Os nomes, emblemas e logótipos pertencem aos respetivos titulares e são apresentados apenas para identificar clubes e competições.

## Publicação

O crédito PJCore Labs usa o símbolo original do repositório da marca (`website/img/pjcorelabs-symbol-clean.png`), copiado sem alterações para `icons/pjcorelabs.png`. Aparece pequeno no canto inferior direito do rodapé e aponta para pjcorelabs.com. O aviso de projeto independente e não oficial permanece separado do emblema do clube.

A página inicial volta a apresentar a aplicação; a versão do service worker e as referências aos recursos são atualizadas juntas. A recolha oficial inicia automaticamente na integração do workflow no ramo principal e prossegue a cada seis horas. O contador GoatCounter é preservado; indisponibilidade de rede ou bloqueio de privacidade é identificada sem atribuir uma causa não confirmada.

Os 46 testes automatizados passaram no GitHub Actions. A publicação no GitHub Pages e a recolha oficial passaram em 03/10/2026. A página pública foi verificada no navegador: dados recebidos, jogo Benfica–Gil Vicente em 29/10 às 20h45, contador a apresentar 34 visitas e símbolo PJCore Labs carregado a 40 × 40 px. Não foi observado transbordo horizontal na janela de teste.

## Canais TV oficiais

O calendário público do SL Benfica fornece os canais TV. O coletor `tools/update_benfica_tv.py` usa apenas Python standard library e o endpoint público utilizado pela página oficial, sem conta ou chave. GitHub Actions recolhe os próximos jogos a cada seis horas. A página consulta o snapshot a cada cinco minutos e associa a TV pela data e pelas duas equipas. Dados de outra época, inválidos ou com mais de 24 horas são rejeitados; uma alteração de data invalida a associação anterior. Canais não anunciados aparecem como “Por confirmar”. “SPORTTV” é apresentado como “SPORT TV”, sem inventar o número do canal. A TV aparece no cartão inicial, nos próximos jogos e na tabela europeia.
