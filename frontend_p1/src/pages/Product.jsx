import React from 'react';
import { useProduct } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams(); // URL: /product/:id
  const { data: product, isLoading, isError } = useProduct(id);

  if (isLoading) return <p className="text-neon-yellow text-center">Loading product...</p>;
  if (isError) return <p className="text-red-500 text-center">Failed to load product 😢</p>;

  return (
    <div className="min-h-screen bg-black text-neon-green font-orbitron p-8 flex flex-col items-center">
      <h2 className="text-4xl mb-6 text-neon-purple font-bold text-center">{product.name}</h2>
      <p className="mb-2 text-neon-yellow">Category: {product.category}</p>
      <p className="mb-4 text-neon-green">Price: ${product.price}</p>
      <p className="mb-6 max-w-2xl text-center">{product.description}</p>

      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          width={1000}
          height={1000}
          className="rounded-xl max-w-full h-auto object-contain shadow-glow"
        />
      )}
    </div>
  );
}
