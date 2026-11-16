# Plano — Caderno de Dados

## Escopo e implementação

Plataforma de estudos em português sobre estatística e análise de dados. A página inicial é um tutorial de uso; as rotas seguintes exibem o índice e quatro lições, uma biblioteca de videoaulas e configurações. Cada lição parte exclusivamente de um exemplo concreto — notas, salários, pesquisa ou gráfico — e explica o que os dados permitem concluir. Ao marcar a lição como concluída, aparecem duas questões de múltipla escolha A–E com feedback explicativo.

A cobertura dos exemplos inclui média, mediana, moda, amplitude, comparação de conjuntos, valor extremo, frequências e percentuais em tabelas, e leitura de eixos, intervalos e unidades em gráficos. A página de videoaulas liga a fontes externas em português conferidas diretamente. A página de configurações oferece tema claro ou escuro. O botão no canto do cabeçalho abre um login apenas demonstrativo: não existe conta, a pessoa é avisada para não inserir uma senha real, nenhum campo é enviado ou gravado e os valores são apagados ao continuar ou fechar. Progresso e tema, sem dados pessoais, ficam somente no armazenamento local do navegador.

A aplicação é estática e não ativa servidor de autenticação nem banco. JavaScript nativo troca as páginas da SPA, com rotas profundas declaradas no manifesto e fallback para o shell no servidor local. O build copia apenas os ativos atuais. O símbolo original e o estilo do projeto permanecem independentes; da referência enviada são usados apenas os tons azul-petróleo, menta, dourado e coral. O número que aparecia como identificação temática anteriormente não é exibido na interface.

### Estrutura do projeto

- `index.html`: shell acessível, navegação, ponto de renderização, escolha rápida de tema e diálogo de login demonstrativo.
- `platform.js`: rotas e conteúdo por exemplo, progressão, questões, links de vídeo, alternância de tema e descarte dos dados temporários do login.
- `platform.css`: estilo responsivo e temas claro/escuro usando a paleta acordada.
- `server.js`: servidor estático de Preview, com fallback para rotas sem extensão da SPA.
- `manus-routes.json`: rotas concretas do tutorial, índice, quatro lições, videoaulas e configurações.
- `brand.svg` e `app.config.ts`: glifo independente e metadado HTTPS do projeto.
- `package.json`: comando de início local.
- `video-sources.md`: referências consultadas para links da página de videoaulas.
- `TODO.md`: critérios do pedido atual e estado das entregas.

## Design

A imagem enviada é usada somente como referência cromática. A estrutura criada — navegação horizontal, tutorial em passos, lista editorial de lições, exemplos de dados e configurações — tem composição própria e não reutiliza a marca, o layout, as ilustrações, os textos ou os cartões daquela página.

- **Movimento:** editorialismo didático contemporâneo.
- **Princípios:** exemplo antes da conclusão; contexto junto aos valores; passos curtos; feedback compreensível.
- **Filosofia cromática:** azul-petróleo para navegação e foco, menta para avanço, dourado para ênfase e coral para atenção; o modo escuro adapta os mesmos matizes.
- **Layout:** navegação superior entre páginas; tutorial introdutório; índice em lista; conteúdo de lições em fluxo de leitura; atividades reveladas no fim do exemplo.
- **Elementos de assinatura:** perguntas de contexto, marcação do progresso e quadros de dados calculados.
- **Interação:** navegação por rota, conclusão explícita antes das questões, feedback acessível, tema e progresso lembrados localmente.
- **Animação:** transições discretas, com suporte a movimento reduzido; nenhuma informação depende delas.
- **Tipografia:** Manrope nos títulos e Inter no corpo, com fontes de sistema como fallback.
- **Essência da marca:** caderno para aprender estatística com situações do cotidiano; claro, curioso e cuidadoso.
- **Voz:** direta e prática: “Escolha uma situação para explorar.” / “Confira o eixo antes de comparar.”
- **Marca:** “Caderno de Dados”, com glifo próprio de pontos conectados.
- **Cor distintiva:** azul-petróleo, combinado com menta, dourado e coral.

## Entrega

O Preview recebe oito rotas declaradas; o build estático usa `dist/`. A implementação mantém login somente demonstrativo, sem contas ou credenciais, e não publica dados na internet. O checkpoint do projeto será salvo no repositório canônico; publicação é uma ação separada e não solicitada.
