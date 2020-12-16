import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  margin: 5%;
  border: 1px dashed tomato;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: green;
`;

// Forma de passar props no styled components:
const Desconto = styled.p`
  background-color: ${(props) => props.cor};
  /* desestruturação:
  background-color: ${({ cor }) => cor};
   */
  color: white;
  border-radius: 5px;
  padding: 0.5rem;
  text-decoration: line-through;
`;

//possibilidade de passar javascript dentro do estilo:
const Promocao = styled.p`
  background-color: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`;

//possibilidade e usar estilo conforme o estado:

const BotaoComprar = styled.button`
  background: ${({ ativo }) => (ativo ? '#fff' : '#000')};
  color: ${({ ativo }) => (ativo ? '#000' : '#fff')};
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
`;

//possibilidade de usar pseudo elementos dentro:

const Preco = styled.h1`
  font-size: 1rem;
  color: tomato;

  &:hover {
    background-color: yellow;
  }
`;

const Produto = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }
  return (
    <Container>
      <Titulo>Notebook</Titulo>
      <Promocao>COMPRE, PROMOÇÃO!!!!!!!!</Promocao>
      <Desconto cor="#53d956">De 4.000,00!!!</Desconto>
      <Preco>Por R$ 2.000,00</Preco>

      <BotaoComprar ativo={ativo} onClick={handleClick}>
        Comprar
      </BotaoComprar>
    </Container>
  );
};

export default Produto;
