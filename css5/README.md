# React Completo Origamid - Módulo CSS - <i> IMPORTAÇÕES DE IMAGENS: </i>

## Definição:


<p>várias formas diferente de importar imagem: src, backgroundImage e usando ReactComponent (SVG)</p>

## Ferramentas e Aprendizados:
<li> Propriedade ANIMATION</li>
<li> Novas formas de importar imagem</li>
<li> Como passar propriedade para um componente img.svg</li>


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

<img src="./gif.gif"/>