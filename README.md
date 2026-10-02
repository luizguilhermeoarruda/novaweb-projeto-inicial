# 👕 Loja Roupa

## 📌 Descrição do Projeto

A **Loja Roupa** é um projeto de loja virtual de roupas desenvolvido como parte do Projeto 01 do curso Técnico em Desenvolvimento de Sistemas.

O sistema tem como objetivo apresentar produtos de vestuário de forma organizada, permitindo que o usuário visualize os produtos, consulte suas informações e adicione itens ao carrinho.

---

## 🎯 Objetivo

Desenvolver uma loja virtual de roupas com uma interface simples, organizada e intuitiva, utilizando tecnologias de desenvolvimento web.

O projeto será desenvolvido inicialmente com **HTML, CSS e JavaScript**, seguindo as etapas de planejamento, estruturação, desenvolvimento e testes.

---

## 📋 Escopo do Projeto

O projeto contempla inicialmente:

* Página inicial da loja;
* Página de produtos;
* Página individual de cada produto;
* Carrinho de compras;
* Organização e apresentação dos produtos;
* Estilização das páginas;
* Interações utilizando JavaScript;
* Testes e correções do sistema.

---

## 🧩 EAP — Estrutura Analítica do Projeto

| Código | Etapa                | Descrição                                      |
| ------ | -------------------- | ---------------------------------------------- |
| 1      | Planejamento         | Definição inicial do projeto                   |
| 1.1    | Ideia da loja        | Definição da proposta da Loja Roupa            |
| 1.2    | Requisitos           | Levantamento das necessidades do sistema       |
| 1.3    | Público-alvo         | Definição dos usuários da loja                 |
| 1.4    | Funcionalidades      | Definição das principais funções               |
| 2      | Arquitetura          | Organização das páginas e navegação            |
| 2.1    | Wireframes           | Criação das telas do sistema                   |
| 2.2    | Identidade visual    | Definição de fontes, cores e elementos visuais |
| 3      | Estrutura do projeto | Organização das pastas e arquivos              |
| 3.1    | README               | Documentação do projeto                        |
| 3.2    | EAP e Cronograma     | Organização das etapas de desenvolvimento      |
| 4      | Desenvolvimento      | Implementação da loja virtual                  |
| 4.1    | HTML                 | Criação da estrutura das páginas               |
| 4.2    | CSS                  | Estilização das páginas                        |
| 4.3    | JavaScript           | Implementação das interações                   |
| 5      | Testes               | Verificação do funcionamento                   |
| 5.1    | Correções            | Correção dos problemas encontrados             |
| 6      | Publicação           | Preparação e publicação do projeto             |

---

## 📅 Cronograma — Kanban

O desenvolvimento do projeto está organizado utilizando o modelo **Kanban**, dividido em três etapas: **A Fazer, Em Andamento e Concluído**.

### 🟡 A Fazer

* Preparação para desenvolvimento HTML;
* Desenvolvimento da página inicial;
* Desenvolvimento da página de produtos;
* Desenvolvimento da página individual do produto;
* Desenvolvimento do carrinho;
* Estilização com CSS;
* Implementação das interações com JavaScript;
* Testes;
* Correções;
* Publicação final.

### 🟠 Em Andamento

No momento, não existem atividades em andamento.

### 🟢 Concluído

* Definição da ideia da loja;
* Levantamento de requisitos;
* Definição do público-alvo;
* Definição das funcionalidades;
* Estruturação da arquitetura do site;
* Criação dos wireframes;
* Revisão dos wireframes;
* Definição da identidade visual;
* Organização da estrutura de pastas;
* Criação da documentação;
* Elaboração da EAP;
* Elaboração do cronograma.

### 🖼️ Visualização do Kanban

![Kanban do Projeto](docs/kanban.png)

---

## 🖼️ Wireframes

Os wireframes foram desenvolvidos durante a etapa de planejamento e representam a estrutura visual das principais telas da Loja Roupa.

### Página Inicial

![Wireframe da Página Inicial](docs/wireframes/home.png)

### Página de Produtos

![Wireframe da Página de Produtos](docs/wireframes/produtos.png)

### Página do Produto

![Wireframe da Página do Produto](docs/wireframes/produto.png)

---

## 📁 Estrutura do Projeto

```text
loja-roupa/
│
├── README.md
│
├── docs/
│   ├── kanban.png
│   └── wireframes/
│       ├── home.png
│       ├── produtos.png
│       └── produto.png
│
├── assets/
│   └── images/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── src/
    └── index.html
```

---

## 🛠️ Tecnologias

As principais tecnologias previstas para o desenvolvimento são:

* HTML5
* CSS3
* JavaScript
* Git
* GitHub

---

## 📌 Status do Projeto

**Projeto 01 — Planejamento e documentação concluídos.**

A estrutura inicial do projeto está preparada para receber a etapa de desenvolvimento HTML.

---

## 👨‍💻 Responsável

**Estudante do Curso Técnico em Desenvolvimento de Sistemas**

# Projeto Nova-Web - Especificações de UI/UX (Tela de Login)

## 1. Conceitos de Usabilidade em Formulários

### Labels e placeholders

Cada campo deve ter uma `label` visível, associada ao controle por `for` e `id`. O placeholder serve apenas como exemplo ou dica curta dentro do campo; ele desaparece durante a digitação e pode ter contraste baixo, portanto não identifica o campo de forma confiável. A label permanece visível e também fornece o nome que tecnologias assistivas anunciam. Instruções importantes, como formato ou requisitos de senha, devem ficar fora do placeholder e ser associadas ao campo quando necessário.

### Hierarquia visual

- **Ação primária — Entrar:** botão preenchido em preto, texto branco, largura total e destaque visual maior. É a ação principal da tela.
- **Ações secundárias — Esqueci a senha? e Cadastre-se:** links com estilo mais discreto, sem competir visualmente com o botão principal. Permanecem legíveis e fáceis de localizar.

## 2. Estados de Validação dos Campos de Entrada

- **Default (padrão):** campo com fundo branco e borda neutra; label escura, visível e posicionada fora do campo.
- **Focus (foco):** contorno/anel escuro claramente visível ao clicar ou navegar com Tab. O foco não deve ser removido nem depender somente de mudança sutil de cor.
- **Error (erro):** borda vermelha acompanhada de mensagem curta e específica junto ao campo, explicando como corrigir. A informação não deve ser comunicada apenas pela cor; quando possível, associar a mensagem ao campo e anunciá-la para leitores de tela.
- **Success (sucesso):** indicador positivo, como texto ou ícone acompanhado de uma mensagem clara. Não usar apenas a cor verde para comunicar o estado.
- **Disabled (desabilitado):** aparência atenuada e controle não interativo. O estado deve continuar identificável e o texto legível; contraste reduzido não deve tornar a informação essencial impossível de ler.

## 3. Padrões de Acessibilidade

- **Contraste:** para atender ao WCAG 2.2 nível AA, texto comum deve ter contraste mínimo de **4,5:1** em relação ao fundo. Texto grande (a partir de 18 pt ou 14 pt em negrito) deve ter pelo menos **3:1**. Não use cor como único meio de transmitir erro, sucesso ou foco.
- **Labels e instruções:** todos os campos precisam de rótulos programaticamente associados. Instruções e erros devem ser claros e estar próximos do campo correspondente.
- **Teclado e foco:** a ordem de navegação por Tab deve acompanhar a ordem visual e lógica da página. Links, campos e botões precisam ser alcançáveis e operáveis pelo teclado, com indicador de foco sempre visível.
- **Leitores de tela e feedback:** use elementos HTML semânticos e nomes compreensíveis. Anuncie erros e mensagens de estado sem exigir que a pessoa procure visualmente a informação; não dependa apenas de alterações visuais.

## Referências

- [W3C WAI — Rótulos para controles de formulário](https://www.w3.org/WAI/tutorials/forms/labels/)
- [W3C WAI — Instruções para formulários e uso de placeholders](https://www.w3.org/WAI/tutorials/forms/instructions/)
- [W3C WAI — Validação de formulários](https://www.w3.org/WAI/tutorials/forms/validation/)
- [W3C WAI — Notificações e mensagens de erro](https://www.w3.org/WAI/tutorials/forms/notifications/)
- [W3C — WCAG 2.2: contraste mínimo (critério 1.4.3)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [W3C — WCAG 2.2: foco visível (critério 2.4.7)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
