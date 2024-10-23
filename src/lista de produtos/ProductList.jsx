import React from 'react';

const produtos = [
  {
    id: 1,
    title: 'Coca-Cola',
    preco: 'R$ 6,99',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Coca-Cola_logo.png',
  },
  {
    id: 2,
    title: 'Arroz',
    preco: 'R$ 29,99',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Arroz.jpg',
  },
  {
    id: 3,
    title: 'Suco',
    preco: 'R$ 1,90',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Juice.png',
  },
  {
    id: 4,
    title: 'Presunto',
    preco: 'R$ 11,90',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Ham.jpg',
  },
  {
    id: 5,
    title: 'Sardinha',
    preco: 'R$ 4,99',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sardines.jpg',
  },
];

const ProductList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {produtos.map((produto) => (
        <div key={produto.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '150px' }}>
          <img src={produto.image} alt={produto.title} style={{ width: '100%', borderRadius: '5px' }} />
          <h3>{produto.title}</h3>
          <p>{produto.preco}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList; // Exporta o componente ProductList
import React from 'react';

const produtos = [
  {
    id: 1,
    title: 'Coca-Cola',
    preco: 'R$ 6,99',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Coca-Cola_logo.png',
  },
  {
    id: 2,
    title: 'Arroz',
    preco: 'R$ 29,99',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Arroz.jpg',
  },
  {
    id: 3,
    title: 'Suco',
    preco: 'R$ 1,90',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Juice.png',
  },
  {
    id: 4,
    title: 'Presunto',
    preco: 'R$ 11,90',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Ham.jpg',
  },
  {
    id: 5,
    title: 'Sardinha',
    preco: 'R$ 4,99',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sardines.jpg',
  },
];

const ProductList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {produtos.map((produto) => (
        <div key={produto.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '150px' }}>
          <img src={produto.image} alt={produto.title} style={{ width: '100%', borderRadius: '5px' }} />
          <h3>{produto.title}</h3>
          <p>{produto.preco}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList; // Exporta o componente ProductList
