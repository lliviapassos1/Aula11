     -- Estúdio de Tatuagem Artística --

-- Explicação --

 criEI uma API para um estúdio de tatuagem. A ideia é ter um sistema onde consigo ver os tatuadores cadastrados e algumas informações sobre eles, como nome, especialidade, cidade e tempo de experiência.

-- Pastas que usei --

- Node.js: para conseguir executar nosso código.
- Express: para criar o servidor e as rotas.
- Supabase:para guardar e buscar as informações.
- SQL: para armazenar os dados.
- JavaScript: para fazer o código funcionar.

Como fizemos?

1- Criei a pasta do projeto no VSCode e instalei as ferramentas necessárias.
2- Fiz a conexão com o Supabase, que é onde ficam guardadas as informações dos tatuadores.
3- Criei uma tabela chamada `artistas_tattoo`, onde coloquei os dados de cada tatuador:

- ID;
- Nome;
- Especialidade;
- Anos de experiência;
- Cidade.

Também criei o arquivo `.env` para colocar as informações necessárias para conectar o projeto ao Supabase.


 -- Rotas criadas --

-- GET /tatuadores --

Mostra todos os tatuadores que estão cadastrados no banco de dados.

-- GET /tatuadores/:id --

Mostra as informações de um tatuador específico, procurando pelo número do ID.

-- GET /tatuadores-ordenados --

Mostra os tatuadores organizados de acordo com o tempo de experiência, começando por quem tem mais anos de trabalho.


-- Final --

Depois de terminar, iniciamos o servidor pelo terminal do VS Code e testamos os endereços no navegador para ver se as rotas estavam funcionando .
Conseguimos visualizar todos os tatuadores, procurar um pelo ID e ver a lista organizada pelos anos de experiência.