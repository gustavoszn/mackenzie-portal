# Portal do Aluno Mackenzie — Redesign Conceitual

> Protótipo conceitual e não oficial desenvolvido para fins de estudo de UX/UI e Front-End.

## Autor

**Gustavo Brito Rodrigues de Sousa**  
Idealização, UX/UI e Desenvolvimento Front-End

## Contexto

O Portal do Aluno da Universidade Presbiteriana Mackenzie é uma ferramenta central para estudantes, concentrando grade curricular, horários, notas, faltas, financeiro e requerimentos. Apesar de funcional, algumas partes da interface apresentam problemas perceptíveis de responsividade — especialmente o Quadro de Horários, que em dispositivos móveis exige rolagem horizontal ou rotação do aparelho.

## Problema identificado

O Quadro de Horários no formato de tabela semanal (`Horário | Segunda | Terça | ...`) não se adapta adequadamente a telas pequenas, obrigando o usuário a adaptar seu dispositivo à interface — o oposto do que deveria acontecer.

## Solução proposta

Redesign completo com abordagem Mobile First:
- Quadro de Horários com seletor de dia e timeline vertical no mobile
- Grade Curricular com cards responsivos em vez de tabela comprimida
- Sidebar com drawer no mobile
- Seletor de curso dinâmico (6 cursos demonstrativos)
- Dados completamente fictícios

## Funcionalidades

- Dashboard com cards de resumo e atalhos rápidos
- Quadro de Horários (timeline mobile + tabela desktop)
- Grade Curricular com accordions por etapa
- Notas por disciplina
- Faltas com indicadores visuais
- Financeiro demonstrativo
- Requerimentos com busca e filtro
- Oportunidades (monitoria, estágio, atividades)
- Seletor de curso com 6 opções
- Página Sobre o Projeto

## Stack

- React + JavaScript
- Vite
- React Router DOM
- CSS Modules
- Lucide React

## Responsividade testada

320px · 360px · 375px · 390px · 430px · 768px · 1024px · 1366px · 1440px · 1920px

## Executar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy

Configurado para Vercel com `vercel.json` para suporte a SPA routing.

## Aviso

Este projeto é um redesign conceitual e independente. Não representa uma aplicação oficial da Universidade Presbiteriana Mackenzie. A marca, logotipos e demais elementos institucionais pertencem aos seus respectivos titulares.

© 2026 Gustavo Brito Rodrigues de Sousa. Todos os direitos reservados sobre esta proposta de redesign e implementação.
