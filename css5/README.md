# React Completo Origamid - Módulo CSS - <i> ANIMAÇÕES 2: </i>

## Definição:

<p>Mini projeto utilizando transitions: Anime a entrada de elementos utilizando a propriedade animation. </p>

## Ferramentas e Aprendizados:
<li> Propriedade ANIMATION</li>
<li> Nova forma de importar imagem</li>


## Importação de imagem:

<p>Podemos importar a imagem direto para o componente. O webpack irá gerar o caminho correto na build final.</p>

```
import foto from './img/foto.jpg';

const App = () => {
  return (
    <div>
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

```
## Imagem do app:

<img src="./gif1.gif"/>