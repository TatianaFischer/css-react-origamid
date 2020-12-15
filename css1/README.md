# CSS MODULES:

## Definição:
<p>Os modules garantem que as classes utilizada sejam sempre únicas, evitando o conflito. O modo já vem configurando com o create-react-app, basta definirmos o nome do arquivo css com a palavra .module. Ex: Produto.module.css. Devemos definir um nome para a importação, a mesma será transformada em um objeto que possui nomes únicos para as classes.</p>

<p>Utilize camelCase tituloPrincipal, já que o nome da classe se transformará em uma propriedade de um objeto JavaScript. Não utilize hífens titulo-principal.</p>

<p>Funcionalidades Extras
O CSS Modules disponibiliza algumas funcionalidades extras para o CSS, como a definição de variáveis, composição de elementos e definição de classes no contexto global. Não aconselho o uso, pois a sintaxe não é bem suportada pela IDE (VS Code) e pelo eslint.</p>