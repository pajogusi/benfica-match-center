# Benfica Match Center

Web app estática e responsiva para acompanhar a equipa principal de futebol do SL Benfica.

## Inclui
- Próximo jogo com contagem decrescente
- Resultados da época 2026/27
- Próximos jogos
- Filtro por competição e adversário
- Calendário das 34 jornadas da Liga Portugal
- Estado das competições
- Exportação de cada jogo para `.ics`
- PWA/offline quando alojada em HTTPS ou localhost
- Tentativa opcional de atualização através de uma API pública, mantendo dados locais se a API falhar

## Abrir
### Forma mais simples
Abra `benfica.html` diretamente no browser (versão de ficheiro único).

### Versão PWA
Na pasta do projeto, execute:

```bash
python3 -m http.server 8080
```

Depois abra `http://localhost:8080`.

## GitHub Pages
Pode publicar toda a pasta no GitHub Pages sem processo de build.

## Dados
Os dados-base foram verificados em fontes oficiais do SL Benfica em 22/08/2026. As datas sem confirmação ficam explicitamente como “por confirmar”.

Projeto não oficial. Não utiliza o emblema oficial do clube.
