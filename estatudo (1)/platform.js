const PROGRESS_KEY = 'caderno-dados:progresso:v1';
const THEME_KEY = 'caderno-dados:tema:v1';
const numberFormat = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });

const lessons = [
  {
    slug: 'notas-e-medidas',
    title: 'Notas: três jeitos de resumir uma turma',
    tag: 'NOTAS · MÉDIA, MEDIANA E MODA',
    intro: 'Cinco notas mostram como média, mediana e moda podem contar partes diferentes da mesma história.',
    exampleTitle: 'Um pequeno boletim',
    context: 'As notas de um grupo foram 5, 6, 7, 7 e 10. Some as notas, coloque os valores em ordem e procure repetições.',
    data: [['Dados ordenados', '5 · 6 · 7 · 7 · 10'], ['Média', '(5 + 6 + 7 + 7 + 10) ÷ 5 = 7'], ['Mediana', '7 — o valor que fica no meio'], ['Moda', '7 — a nota que mais se repete'], ['Amplitude', '10 − 5 = 5 pontos']],
    takeaway: 'Neste grupo, média, mediana e moda coincidem. Se uma nota muito baixa ou muito alta aparecesse, a média poderia se afastar do centro; por isso compare mais de uma medida quando o contexto pedir.',
    questions: [
      { prompt: 'Em outro conjunto de notas: 4, 6, 8, 9 e 13. Qual é a média?', options: ['7', '8', '9', '10', '40'], correct: 1, explanation: 'A soma é 40 e há cinco notas: 40 ÷ 5 = 8.' },
      { prompt: 'Qual é a moda de 2, 4, 4, 6 e 9?', options: ['4', '2', '5', '6', '9'], correct: 0, explanation: 'O 4 aparece duas vezes; os demais valores aparecem uma vez.' }
    ]
  },
  {
    slug: 'salarios-e-extremos',
    title: 'Salários: quando um valor muda a média',
    tag: 'SALÁRIOS · EXTREMOS E AMPLITUDE',
    intro: 'Um salário muito distante dos demais altera a média; comparar a mediana e a amplitude ajuda a revelar o efeito.',
    exampleTitle: 'Cinco salários fictícios',
    context: 'Considere R$ 2.500, R$ 2.800, R$ 3.000, R$ 3.200 e R$ 30.000. Quatro valores estão próximos; um é muito maior.',
    data: [['Salários ordenados', '2.500 · 2.800 · 3.000 · 3.200 · 30.000'], ['Média', 'R$ 8.300 — elevada pelo maior salário'], ['Mediana', 'R$ 3.000 — o valor central'], ['Moda', 'Não há: nenhum salário se repete'], ['Amplitude', 'R$ 30.000 − R$ 2.500 = R$ 27.500']],
    takeaway: 'Para falar do salário típico deste grupo, a mediana descreve melhor o centro. A amplitude também aumenta bastante porque usa os dois extremos; ela não mostra como os outros salários se distribuem entre eles.',
    questions: [
      { prompt: 'Qual medida representa melhor o centro típico desses cinco salários?', options: ['A média de R$ 8.300', 'A mediana de R$ 3.000', 'A amplitude de R$ 27.500', 'O maior salário de R$ 30.000', 'O total dos salários'], correct: 1, explanation: 'O salário de R$ 30.000 puxa a média para cima. A mediana fica no centro dos valores ordenados e resiste melhor a esse extremo.' },
      { prompt: 'Qual é a amplitude entre R$ 2.500 e R$ 30.000?', options: ['R$ 27.500', 'R$ 3.000', 'R$ 30.000', 'R$ 32.500', 'R$ 25.000'], correct: 0, explanation: 'Amplitude = maior − menor: R$ 30.000 − R$ 2.500 = R$ 27.500.' }
    ]
  },
  {
    slug: 'pesquisa-e-tabela',
    title: 'Pesquisa: transforme respostas em tabela',
    tag: 'PESQUISA · FREQUÊNCIA E PERCENTUAL',
    intro: 'Uma enquete fictícia mostra como conferir frequências, total de respostas e percentuais antes de resumir os resultados.',
    exampleTitle: 'Bebida preferida por 50 estudantes',
    context: 'Confira se a soma das respostas bate com o total pesquisado e se as partes percentuais completam o todo.',
    table: true,
    data: [['Café', '20', '40%'], ['Chá', '10', '20%'], ['Suco', '15', '30%'], ['Água', '5', '10%'], ['Total', '50', '100%']],
    takeaway: 'A moda é café, pois foi a categoria mais escolhida (20 respostas). O percentual é a frequência dividida pelo total: 20 ÷ 50 = 40%. O resultado descreve quem respondeu à pesquisa; não prova, sozinho, a preferência de todas as pessoas.',
    questions: [
      { prompt: 'Na tabela, quantas pessoas escolheram suco?', options: ['5', '10', '15', '20', '30'], correct: 2, explanation: 'A frequência de suco é 15 estudantes.' },
      { prompt: 'Qual percentual escolheu café?', options: ['40%', '10%', '20%', '30%', '50%'], correct: 0, explanation: '20 das 50 respostas foram café. Como 20 ÷ 50 = 0,40, isso corresponde a 40%.' }
    ]
  },
  {
    slug: 'graficos-e-escalas',
    title: 'Gráficos: confira o eixo antes de comparar',
    tag: 'GRÁFICOS · EIXOS E ESCALAS',
    intro: 'As mesmas notas podem parecer quase iguais ou muito diferentes dependendo de onde o eixo começa.',
    exampleTitle: 'Duas turmas e duas escalas',
    context: 'A turma A obteve 96 pontos e a turma B, 98. No eixo completo, de zero a cem, as barras ficam parecidas; se o eixo começa em 95, a diferença visual parece bem maior.',
    chart: true,
    data: [['Turma A', '96 pontos'], ['Turma B', '98 pontos'], ['Diferença real', '2 pontos'], ['Confira', 'Título · unidade · início do eixo · intervalos · fonte']],
    takeaway: 'Leia os números do eixo e a distância entre as marcações. Um eixo truncado pode ampliar visualmente uma diferença pequena. Confira também a unidade, o título e a fonte dos dados antes de concluir.',
    questions: [
      { prompt: 'Se uma turma fez 96 pontos e outra 98, qual é a diferença real?', options: ['0 ponto', '2 pontos', '4 pontos', '50 pontos', '98 pontos'], correct: 1, explanation: '98 − 96 = 2 pontos. Uma escala diferente muda a aparência, não a diferença nos dados.' },
      { prompt: 'O que conferir antes de comparar duas barras?', options: ['Apenas a cor das barras', 'Somente qual barra é mais alta', 'Se o desenho é tridimensional', 'A opinião de quem fez o gráfico', 'Título, rótulos, unidade e intervalos do eixo'], correct: 4, explanation: 'Título, rótulos, unidades, intervalos e início do eixo ajudam a entender se a comparação é justa.' }
    ]
  }
];

const videoLessons = [
  {
    title: 'Exemplo de média, mediana e moda',
    publisher: 'Khan Academy · Matemática do Ensino Médio',
    description: 'Acompanhe um conjunto numérico, calcule a média, ordene os dados para achar a mediana e procure o valor mais frequente.',
    url: 'https://www.youtube.com/watch?v=k3aKKasOmIw',
    badge: 'MEDIDAS'
  },
  {
    title: 'Conceitos básicos de estatística: população, amostra e organização de dados',
    publisher: 'Dividindo a Matemática · professora Gisele Ramos',
    description: 'Veja exemplos de pesquisa, população e amostra; a aula também apresenta tabelas, gráficos e frequências.',
    url: 'https://www.youtube.com/watch?v=5ctWgFOizkQ',
    badge: 'PESQUISAS E TABELAS'
  },
  {
    title: 'Interpretação de gráficos: IBGE Educa',
    publisher: 'Videoaula aberta · YouTube',
    description: 'Explore gráficos com exemplos ligados aos dados do IBGE e pratique a leitura de categorias, eixos e valores.',
    url: 'https://www.youtube.com/watch?v=UzAbAsqEvTk',
    badge: 'GRÁFICOS'
  }
];

function safeRead(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function safeWrite(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // A plataforma continua funcionando caso o navegador bloqueie o armazenamento local.
  }
}

function readCompleted() {
  const stored = safeRead(PROGRESS_KEY, []);
  return new Set(Array.isArray(stored) ? stored.filter(slug => lessons.some(lesson => lesson.slug === slug)) : []);
}

const completedLessons = readCompleted();
const main = document.querySelector('#main-content');
let currentTheme = safeRead(THEME_KEY, 'light') === 'dark' ? 'dark' : 'light';
let lastLoginTrigger = null;

function applyTheme(theme) {
  currentTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = currentTheme;
  safeWrite(THEME_KEY, currentTheme);
  document.querySelectorAll('[data-theme-choice]').forEach(button => {
    const active = button.dataset.themeChoice === currentTheme;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('selected', active);
  });
  const themeButton = document.querySelector('#theme-toggle');
  if (themeButton) {
    const next = currentTheme === 'light' ? 'escuro' : 'claro';
    themeButton.setAttribute('aria-label', `Ativar tema ${next}`);
    themeButton.innerHTML = `<span class="theme-symbol" aria-hidden="true">${currentTheme === 'light' ? '◐' : '☼'}</span><span>${currentTheme === 'light' ? 'Escuro' : 'Claro'}</span>`;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function currentPath() {
  let pathname = window.location.pathname;
  try { pathname = decodeURIComponent(pathname); } catch { /* mantém o caminho original */ }
  const normalized = pathname.replace(/\/+$/, '');
  return normalized || '/';
}

function link(href, label, className = '') {
  return `<a class="${className}" href="${escapeHtml(href)}" data-route>${label}</a>`;
}

function completedCount() {
  return completedLessons.size;
}

function progressMarkup() {
  const count = completedCount();
  return `<div class="progress-summary" aria-label="Progresso das lições"><div class="progress-number">${count}<span> / ${lessons.length}</span></div><div><strong>lições concluídas</strong><p>O progresso fica salvo somente neste navegador.</p></div><div class="progress-track" aria-hidden="true"><span style="width:${Math.round(count / lessons.length * 100)}%"></span></div></div>`;
}

function pageHeader(eyebrow, title, intro) {
  return `<div class="page-heading"><p class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span>${escapeHtml(eyebrow)}</p><h1>${title}</h1><p class="page-intro">${intro}</p></div>`;
}

function renderHome() {
  const count = completedCount();
  const first = lessons[0];
  return `<section class="home-page">
    <div class="welcome-grid">
      <div class="welcome-copy">
        <p class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span>ESTATÍSTICA E ANÁLISE DE DADOS</p>
        <h1>Dados do dia a dia.<br><em>Ideias que fazem sentido.</em></h1>
        <p class="lead">Um espaço para aprender estatística por situações concretas: notas, salários, pesquisas e gráficos que aparecem no mundo real.</p>
        <div class="welcome-actions">${link('/licoes', 'Explorar as lições <span aria-hidden="true">→</span>', 'button button-primary')}${link('/videoaulas', 'Ver videoaulas', 'text-link')}</div>
      </div>
      <aside class="welcome-aside" aria-label="Seu progresso">
        <span class="aside-kicker">SUA JORNADA</span><div class="progress-orbit"><strong>${count}<small>/${lessons.length}</small></strong></div>
        <p><strong>${count ? 'Bom trabalho: continue!' : 'Comece com um exemplo.'}</strong><br>Conclua uma lição para liberar duas questões de prática.</p>
      </aside>
    </div>

    <section class="tutorial-section" aria-labelledby="tutorial-title">
      <div class="section-heading"><div><p class="eyebrow">COMO USAR O SITE</p><h2 id="tutorial-title">Quatro passos para <em>aprender praticando.</em></h2></div><span class="section-note">SEM PRESSA · NO SEU RITMO</span></div>
      <div class="tutorial-steps">
        <article class="tutorial-step"><span class="step-mark">A</span><div><h3>Escolha uma situação</h3><p>Abra uma lição de notas, salários, pesquisa ou gráficos. Cada uma começa com um exemplo, não com uma lista de fórmulas.</p></div></article>
        <article class="tutorial-step"><span class="step-mark">B</span><div><h3>Acompanhe os dados</h3><p>Veja como cada valor foi resumido e qual pergunta a média, mediana, moda ou amplitude consegue responder.</p></div></article>
        <article class="tutorial-step"><span class="step-mark">C</span><div><h3>Conclua e pratique</h3><p>Marque a lição como concluída para revelar duas questões A–E com explicação. O avanço fica guardado neste navegador.</p></div></article>
        <article class="tutorial-step"><span class="step-mark">D</span><div><h3>Altere sua experiência</h3><p>Abra as configurações para trocar entre o tema claro e o escuro. Use a página de videoaulas para abrir conteúdos externos.</p></div></article>
      </div>
      <div class="tutorial-bottom">${link(`/licoes/${first.slug}`, 'Começar por um exemplo de notas <span aria-hidden="true">↗</span>', 'text-link')}</div>
    </section>

    <section class="home-lower" aria-label="Visão da plataforma"><div><p class="eyebrow">A TRILHA DE ESTUDO</p><h2>Aprender também é <em>conferir.</em></h2><p>Compare resumos, observe valores extremos e confira eixos, unidades e escalas antes de tirar conclusões.</p></div>${progressMarkup()}</section>
  </section>`;
}

function renderLessonsIndex() {
  const rows = lessons.map((lesson, index) => {
    const done = completedLessons.has(lesson.slug);
    return `<article class="lesson-row ${done ? 'is-complete' : ''}"><span class="lesson-index">${String.fromCharCode(65 + index)}</span><div class="lesson-row-copy"><span class="lesson-tag">${escapeHtml(lesson.tag)}</span><h2>${link(`/licoes/${lesson.slug}`, escapeHtml(lesson.title), 'lesson-title-link')}</h2><p>${escapeHtml(lesson.intro)}</p></div><span class="lesson-status">${done ? 'Concluída' : '2 questões ao concluir'}</span><span class="row-arrow" aria-hidden="true">↗</span></article>`;
  }).join('');
  return `<section class="listing-page">${pageHeader('LIÇÕES POR EXEMPLOS', 'Escolha uma situação <em>para explorar.</em>', 'Cada lição parte de dados concretos e termina com duas questões de prática.')}${progressMarkup()}<div class="lesson-list">${rows}</div><p class="privacy-note">Seu progresso é salvo apenas neste dispositivo. Nenhuma conta é necessária.</p></section>`;
}

function renderDataTable(rows) {
  return `<div class="data-table-wrap"><table><thead><tr><th scope="col">Resposta</th><th scope="col">Frequência</th><th scope="col">Percentual</th></tr></thead><tbody>${rows.slice(0, -1).map(row => `<tr><th scope="row">${escapeHtml(row[0])}</th><td>${escapeHtml(row[1])}</td><td>${escapeHtml(row[2])}</td></tr>`).join('')}</tbody><tfoot><tr><th scope="row">${escapeHtml(rows.at(-1)[0])}</th><td>${escapeHtml(rows.at(-1)[1])}</td><td>${escapeHtml(rows.at(-1)[2])}</td></tr></tfoot></table></div>`;
}

function renderScaleFigure() {
  return `<div class="scale-example" role="img" aria-label="Comparação das mesmas notas, 96 e 98: barras parecidas em uma escala de zero a cem e visualmente mais distantes em uma escala que começa em 95.">
    <div class="scale-example-card"><span class="chart-eyebrow">EIXO DE 0 A 100</span><div class="sample-bars full-scale"><div class="sample-bar" style="--bar:96%"><span>96</span></div><div class="sample-bar mint-bar" style="--bar:98%"><span>98</span></div></div><div class="sample-labels"><span>Turma A</span><span>Turma B</span></div><small>Diferença real: 2 pontos</small></div>
    <div class="scale-example-card"><span class="chart-eyebrow coral-text">EIXO COMEÇA EM 95</span><div class="sample-bars cut-scale"><div class="sample-bar" style="--bar:20%"><span>96</span></div><div class="sample-bar mint-bar" style="--bar:60%"><span>98</span></div></div><div class="sample-labels"><span>Turma A</span><span>Turma B</span></div><small>A diferença parece maior</small></div>
  </div>`;
}

function renderExample(lesson) {
  const content = lesson.table
    ? renderDataTable(lesson.data)
    : lesson.chart
      ? renderScaleFigure()
      : `<dl class="example-data">${lesson.data.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl>`;
  return `<section class="worked-example" aria-labelledby="example-heading"><div class="example-heading"><span class="example-mark" aria-hidden="true">∴</span><div><p class="eyebrow">EXEMPLO NA PRÁTICA</p><h2 id="example-heading">${escapeHtml(lesson.exampleTitle)}</h2></div></div><p class="example-context">${escapeHtml(lesson.context)}</p>${content}<div class="example-takeaway"><span aria-hidden="true">↗</span><p>${escapeHtml(lesson.takeaway)}</p></div></section>`;
}

function renderQuestions(lesson) {
  return lesson.questions.map((question, questionIndex) => `<article class="question-card" data-question-card="${questionIndex}"><p class="question-count">QUESTÃO ${questionIndex + 1} DE ${lesson.questions.length}</p><h3>${escapeHtml(question.prompt)}</h3><div class="answer-list" role="group" aria-label="Alternativas da questão ${questionIndex + 1}">${question.options.map((option, index) => `<button type="button" class="answer-option" data-question="${questionIndex}" data-answer="${index}"><span>${String.fromCharCode(65 + index)}</span>${escapeHtml(option)}</button>`).join('')}</div><p class="answer-feedback" data-feedback-for="${questionIndex}" aria-live="polite"></p></article>`).join('');
}

function renderLesson(lesson) {
  const done = completedLessons.has(lesson.slug);
  const lessonIndex = lessons.indexOf(lesson);
  return `<article class="lesson-page">
    <div class="breadcrumb">${link('/licoes', 'Lições')}<span aria-hidden="true">/</span><span>${escapeHtml(lesson.title)}</span></div>
    <header class="lesson-heading"><p class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span>${escapeHtml(lesson.tag)}</p><h1>${escapeHtml(lesson.title)}</h1><p class="page-intro">${escapeHtml(lesson.intro)}</p><div class="lesson-meta"><span>EXEMPLO ${String.fromCharCode(65 + lessonIndex)}</span><span>2 QUESTÕES A–E</span><span class="completion-pill ${done ? 'is-complete' : ''}">${done ? 'CONCLUÍDA' : 'A PRÁTICA APARECE AO CONCLUIR'}</span></div></header>
    ${renderExample(lesson)}
    <div class="lesson-action-wrap">${done ? '<p class="completed-message" role="status"><span aria-hidden="true">✓</span> Esta lição está concluída.</p>' : `<button type="button" class="button button-primary" data-complete-lesson="${escapeHtml(lesson.slug)}">Concluir exemplo e ver as atividades <span aria-hidden="true">↓</span></button>`}${link('/videoaulas', 'Procurar uma videoaula de apoio', 'text-link')}</div>
    ${done ? `<section class="quiz-section" id="atividades" aria-labelledby="quiz-title"><div class="quiz-heading"><p class="eyebrow">SUA VEZ · ${String.fromCharCode(65 + lessonIndex)}</p><h2 id="quiz-title">Duas perguntas <em>sobre o exemplo.</em></h2><p>Escolha uma alternativa. Cada resposta vem acompanhada de uma explicação.</p></div><div class="question-list">${renderQuestions(lesson)}</div></section>` : `<p class="quiz-locked-note">Ao concluir o exemplo, duas questões sobre este conteúdo serão exibidas aqui.</p>`}
    <nav class="lesson-pagination" aria-label="Navegar pelas lições"><span>${lessonIndex > 0 ? link(`/licoes/${lessons[lessonIndex - 1].slug}`, `← ${escapeHtml(lessons[lessonIndex - 1].title)}`, 'text-link') : ''}</span><span>${lessonIndex < lessons.length - 1 ? link(`/licoes/${lessons[lessonIndex + 1].slug}`, `${escapeHtml(lessons[lessonIndex + 1].title)} →`, 'text-link') : link('/licoes', 'Voltar ao índice →', 'text-link')}</span></nav>
  </article>`;
}

function renderVideoLibrary() {
  const cards = videoLessons.map(video => `<article class="video-row"><span class="video-play" aria-hidden="true">▶</span><div class="video-copy"><span class="video-badge">${escapeHtml(video.badge)}</span><h2>${escapeHtml(video.title)}</h2><p class="video-publisher">${escapeHtml(video.publisher)}</p><p>${escapeHtml(video.description)}</p></div><a class="video-link" href="${escapeHtml(video.url)}" target="_blank" rel="noopener noreferrer">Abrir videoaula <span aria-hidden="true">↗</span></a></article>`).join('');
  return `<section class="videos-page">${pageHeader('APRENDER COM VÍDEOS', 'Videoaulas para <em>continuar explorando.</em>', 'Abra uma aula externa e volte aos exemplos deste site para comparar as ideias. Os links levam a conteúdos de terceiros.')}
    <div class="video-guidance"><strong>Antes de assistir</strong><span>Escolha um tema, anote os dados usados no vídeo e observe qual pergunta cada medida responde.</span></div><div class="video-list">${cards}</div>
    <aside class="reading-resource"><span class="resource-mark" aria-hidden="true">↗</span><div><p class="eyebrow">LEITURA COMPLEMENTAR · FONTE OFICIAL</p><h2>Um guia do IBGE para ler gráficos.</h2><p>Confira títulos, fontes, rótulos, começo dos eixos, intervalos de escala e possíveis quebras.</p></div><a href="https://educa.ibge.gov.br/professores/educa-recursos/20773-tipos-de-graficos-no-ensino.html" target="_blank" rel="noopener noreferrer">Abrir material do IBGE <span aria-hidden="true">↗</span></a></aside>
  </section>`;
}

function renderSettings() {
  const count = completedCount();
  return `<section class="settings-page">${pageHeader('PERSONALIZE A EXPERIÊNCIA', 'Escolha como prefere <em>estudar.</em>', 'Essas preferências são locais e podem ser alteradas quando quiser.')}
    <section class="settings-group" aria-labelledby="theme-title"><div class="settings-copy"><p class="eyebrow">APARÊNCIA</p><h2 id="theme-title">Tema da página</h2><p>Selecione uma opção de contraste para a leitura. A escolha fica somente neste navegador.</p></div><div class="theme-options" role="group" aria-label="Selecionar tema"><button type="button" class="theme-choice" data-theme-choice="light" aria-pressed="false"><span class="theme-preview light-preview" aria-hidden="true"><i></i><i></i><i></i></span><span><strong>Claro</strong><small>Fundo claro</small></span><span class="choice-mark" aria-hidden="true">✓</span></button><button type="button" class="theme-choice" data-theme-choice="dark" aria-pressed="false"><span class="theme-preview dark-preview" aria-hidden="true"><i></i><i></i><i></i></span><span><strong>Escuro</strong><small>Fundo escuro</small></span><span class="choice-mark" aria-hidden="true">✓</span></button></div></section>
    <section class="settings-group progress-settings" aria-labelledby="progress-title"><div class="settings-copy"><p class="eyebrow">SEU AVANÇO</p><h2 id="progress-title">Progresso neste navegador</h2><p>${count} de ${lessons.length} lições marcadas como concluídas. O progresso não é associado a uma conta.</p></div><button type="button" class="button button-outline" id="reset-progress" ${count === 0 ? 'disabled' : ''}>Limpar progresso</button><p class="reset-feedback" id="reset-feedback" role="status" aria-live="polite"></p></section>
    <aside class="settings-privacy"><span aria-hidden="true">i</span><p><strong>Privacidade:</strong> tema e conclusão das lições ficam no armazenamento local deste navegador. O login de demonstração não envia nem guarda email ou senha.</p></aside>
  </section>`;
}

function renderNotFound() {
  return `<section class="not-found">${pageHeader('PÁGINA NÃO ENCONTRADA', 'Vamos voltar <em>ao estudo.</em>', 'Este endereço não corresponde a uma página da plataforma.')}${link('/', 'Ir ao tutorial inicial →', 'button button-primary')}</section>`;
}

function updateNav(path) {
  document.querySelectorAll('#main-nav [data-route]').forEach(anchor => {
    const href = anchor.getAttribute('href');
    const active = path === href || (href === '/licoes' && path.startsWith('/licoes/'));
    if (active) anchor.setAttribute('aria-current', 'page');
    else anchor.removeAttribute('aria-current');
  });
}

function renderApp({ focus = false } = {}) {
  const path = currentPath();
  let html;
  if (path === '/') html = renderHome();
  else if (path === '/licoes') html = renderLessonsIndex();
  else if (path === '/videoaulas') html = renderVideoLibrary();
  else if (path === '/configuracoes') html = renderSettings();
  else if (path.startsWith('/licoes/')) {
    const slug = path.split('/').filter(Boolean).at(-1);
    const lesson = lessons.find(item => item.slug === slug);
    html = lesson ? renderLesson(lesson) : renderNotFound();
  } else html = renderNotFound();
  main.innerHTML = html;
  updateNav(path);
  applyTheme(currentTheme);
  const pageName = path === '/' ? 'Tutorial' : path === '/licoes' ? 'Lições' : path === '/videoaulas' ? 'Videoaulas' : path === '/configuracoes' ? 'Configurações' : lessons.find(lesson => `/licoes/${lesson.slug}` === path)?.title || 'Página';
  document.title = `${pageName} | Caderno de Dados`;
  const progressOrbit = document.querySelector('.progress-orbit');
  if (progressOrbit) progressOrbit.style.setProperty('--progress', `${Math.round(completedCount() / lessons.length * 100)}%`);
  if (focus) {
    main.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}

function navigate(path) {
  if (!path.startsWith('/')) return;
  if (path !== currentPath()) history.pushState({}, '', path);
  closeMobileMenu();
  renderApp({ focus: true });
}

function closeMobileMenu() {
  const menu = document.querySelector('#main-nav');
  const toggle = document.querySelector('#menu-toggle');
  menu.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
}

document.addEventListener('click', event => {
  const routeAnchor = event.target.closest('a[data-route]');
  if (routeAnchor && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
    event.preventDefault();
    navigate(routeAnchor.getAttribute('href'));
    return;
  }

  const completeButton = event.target.closest('[data-complete-lesson]');
  if (completeButton) {
    const slug = completeButton.dataset.completeLesson;
    if (!lessons.some(lesson => lesson.slug === slug)) return;
    completedLessons.add(slug);
    safeWrite(PROGRESS_KEY, [...completedLessons]);
    renderApp();
    document.querySelector('#atividades')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelector('#quiz-title')?.setAttribute('tabindex', '-1');
    document.querySelector('#quiz-title')?.focus({ preventScroll: true });
    return;
  }

  const answerButton = event.target.closest('[data-question][data-answer]');
  if (answerButton) {
    const slug = currentPath().split('/').at(-1);
    const lesson = lessons.find(item => item.slug === slug);
    const question = lesson?.questions[Number(answerButton.dataset.question)];
    if (!question) return;
    const card = answerButton.closest('.question-card');
    card.querySelectorAll('.answer-option').forEach(button => {
      button.classList.remove('is-correct', 'is-incorrect');
      button.setAttribute('aria-pressed', 'false');
    });
    const isCorrect = Number(answerButton.dataset.answer) === question.correct;
    answerButton.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
    answerButton.setAttribute('aria-pressed', 'true');
    const feedback = card.querySelector('.answer-feedback');
    feedback.textContent = `${isCorrect ? 'Isso mesmo. ' : 'Revise o exemplo. '}${question.explanation}`;
    feedback.classList.toggle('feedback-correct', isCorrect);
    feedback.classList.toggle('feedback-incorrect', !isCorrect);
    return;
  }

  const themeChoice = event.target.closest('[data-theme-choice]');
  if (themeChoice) {
    applyTheme(themeChoice.dataset.themeChoice);
    return;
  }

  if (event.target.closest('#reset-progress')) {
    completedLessons.clear();
    safeWrite(PROGRESS_KEY, []);
    renderApp();
    const feedback = document.querySelector('#reset-feedback');
    if (feedback) feedback.textContent = 'O progresso local foi limpo.';
    return;
  }

  if (event.target.closest('#theme-toggle')) {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    return;
  }

  if (event.target.closest('#menu-toggle')) {
    const toggle = document.querySelector('#menu-toggle');
    const menu = document.querySelector('#main-nav');
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menu.classList.toggle('is-open', open);
    return;
  }

  if (event.target.closest('#login-open')) {
    lastLoginTrigger = document.activeElement;
    const dialog = document.querySelector('#login-dialog');
    dialog.hidden = false;
    document.querySelector('#demo-email').focus();
    return;
  }

  if (event.target.closest('#login-close') || event.target.id === 'login-dialog') {
    closeLoginDialog();
    return;
  }

  if (event.target.closest('#demo-login-submit')) {
    document.querySelector('#demo-email').value = '';
    document.querySelector('#demo-password').value = '';
    document.querySelector('#login-status').textContent = 'Apenas demonstração: nenhuma conta foi autenticada e os campos foram limpos. Nada foi enviado ou salvo.';
    return;
  }
});

function closeLoginDialog() {
  const dialog = document.querySelector('#login-dialog');
  dialog.hidden = true;
  document.querySelector('#demo-email').value = '';
  document.querySelector('#demo-password').value = '';
  document.querySelector('#login-status').textContent = '';
  lastLoginTrigger?.focus();
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !document.querySelector('#login-dialog').hidden) closeLoginDialog();
});

window.addEventListener('popstate', () => renderApp({ focus: true }));
applyTheme(currentTheme);
renderApp();


document.addEventListener('keydown', event => {
  const dialog = document.querySelector('#login-dialog');
  if (dialog.hidden || event.key !== 'Tab') return;
  const focusable = [...dialog.querySelectorAll('button, input')].filter(element => !element.disabled);
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
