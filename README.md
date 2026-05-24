# DESAFIO 3 - FrontEnd

## O Proposto (A.N.G.E.L.I.C.A. - Desafio Front-End e API Territorial):

Este desafio representa o projeto de ingresso prático no desenvolvimento front-end moderno dentro do estágio da A.N.G.E.L.I.C.A. (Agência Nacional de Gerenciamento de Estados e Logística de Informações Continentais para Análise). O objetivo principal é resolver um problema real da agência: centralizar e unificar a consulta de dados territoriais (regiões, estados e municípios) que antes eram fragmentados em planilhas isoladas, gerando duplicidade e inconsistência de dados entre os setores.

Criar um painel administrativo utilizando a API de Localidades do IBGE para centralizar a consulta e visualização dessas informações de maneira intuitiva e organizada.
O sistema deverá permitir:
- navegação por regiões, estados e municípios;
- filtros e buscas rápidas;
- visualização de métricas territoriais;
- organização dos dados em tabelas e gráficos.

O protótipo deverá ter:
- Um Header com o nome do sistema
- Uma área central com Cards de Resumo, com:
- botão com o nome e sigla de todas as UFs estilo Accordion navigation drawer no corpo da página, não é um menu lateral.
- Contador de Municípios: "Total de cidades encontradas: X"
- ID da UF: Mostrar o código numérico do estado.
- tabela com todos os municípios da UF selecionada

O Figma deve conter :
- Estado Inicial: O accordion fechado com UF selecionada municípios na tabela.
- Estado Ativo: O accordion aberto com a lista de siglas e a tabela preenchida.
- Style guide com Paleta de Cores, Tipografia, Componentes de Interface (UI), Iconografia.
- O protótipo deve demonstrar hierarquia visual, uso de componentes e simula o fluxo do dashboard

E o sistema deverá ter alguns requisitos funcionais obrigatórios como:
- Integração com Mapas: Ao clicar no nome do município na tabela, abrir o Google Maps em uma nova aba com o local selecionado.
- KPIs Dinâmicos: O contador de cidades deve se atualizar automaticamente conforme a UF escolhida.
- Filtro de Busca (Extra): Um campo para filtrar o nome do município dentro da tabela já carregada (sem novas requisições).

Requisitos obrigatórios não-funcionais:
- Modularização: O JavaScript deve estar em arquivo separado.
- Clean Code: Nomes de variáveis semânticos (em inglês ou português, mas mantenha o padrão).
- Deploy: O projeto deve estar online via GitHub Pages.
---

## O Entregue:

O Painel de Localidades foi desenvolvido alcançando máxima fidelidade ao protótipo do Figma e cumprindo os requisitos funcionais e não-funcionai. A aplicação centraliza a busca de dados territoriais em tempo real de forma simples e de fácil entendimento para quem for utilizar. 

### Principais Tecnologias Utilizadas:

- **HTML5**
- **CSS3** 
- **JavaScript** 
- **Google Fonts (Marko One)** 

### Funcionalidades:

- **Integração em Tempo Real com o IBGE:**;
- **KPIs Dinâmicos:**
- **Filtro de Busca Local**
- **Integração com Google Maps:**

## Links:

Site publicado (GitHub Pages): https://ingriddesv.github.io/desafio3_engnet/ 

---
