# React Completo Origamid - Módulo CSS - <i> CSS Frameworks: </i>

<p>Podemos adicionar qualquer library/framework de css ao React. Com o @next vamos instalar a versão 5 do bootstrap. Popper é necessário para algumas funções do bootstrap.</p>

## 1.  Bootstrap:

# Instalação:

```
npm install bootstrap@next
```

```
<!-- No index.js -->
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

## 2. React  Bootstrap:
<p>Existem frameworks de CSS que te fornecem componentes prontos para serem utilizados no local de classes. O react-bootstrap utiliza em sua base o bootstrap, mas fornece componentes React.</p>

# Instalação:

```
npm install react-bootstrap bootstrap
```

```
<!-- No index.js -->
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

```
<!-- No app ou no componente: -->
import React from 'react';
import Card from 'react-bootstrap/Card';
```


## Ferramentas e Aprendizados:
<li> </li>

## Imagem do app:

<img src="./img.PNG"/>