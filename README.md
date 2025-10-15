# Site de Avaliação de Jogos

## 1. Passos para Execução

### 1.1. Clonar o Repositório

1. Acesse o repositório no GitHub e copie o link HTTPS.
2. No terminal, execute:

```bash
git clone <link-HTTPS>
```

3. Em seguida, entre na pasta do projeto:

```bash
cd nome-do-projeto
```

### 1.2. Instalar Dependências

Com o terminal aberto na pasta do projeto, execute:

```bash
npm install
```

Esse comando instala todas as dependências necessárias para o funcionamento do sistema.

### 1.3. Iniciar o Servidor de Desenvolvimento

Para rodar o projeto localmente, use o comando:

```bash
npm run dev
```

Após alguns segundos, o terminal exibirá um endereço semelhante a:

```
http://localhost:5173/
```

### 1.4. Acessar o Projeto

Abra o navegador e acesse o endereço informado. O projeto será carregado e estará pronto para uso.

## 2. Tecnologias Utilizadas

As principais tecnologias empregadas são:

- React
- Vite
- React Router
- JavaScript
- HTML
- CSS

## 3. Principais Decisões Técnicas

O projeto foi desenvolvido com foco em simplicidade, leveza e fácil manutenção. O estado global permite o compartilhamento de dados, como filtros e avaliações, entre diferentes partes da aplicação de forma prática. As avaliações dos usuários são salvas localmente no navegador, garantindo que as informações permaneçam mesmo após o fechamento da página.
Para manter um bom desempenho, as listas de jogos e avaliações são atualizadas apenas quando necessário, evitando processamentos desnecessários. A interface foi construída de forma componentizada, com elementos reutilizáveis que facilitam melhorias e ajustes. O layout e o estilo visual utilizam CSS puro, com grids e media queries que garantem responsividade e boa adaptação a diferentes tamanhos de tela.
