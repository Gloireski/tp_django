import React from 'react';
import { useProduct } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams(); // URL: /product/:id
  const { data: product, isLoading, isError } = useProduct(id);

  if (isLoading) return <p className="text-neon-yellow text-center">Loading product...</p>;
  if (isError) return <p className="text-red-500 text-center">Failed to load product 😢</p>;

  console.log("produit fetched:", product)

  return (
    <div className="min-h-screen bg-black text-neon-green font-orbitron p-8">
      <h2 className="text-4xl mb-6 text-neon-purple font-bold">{product.name}</h2>
      <p className="mb-2 text-neon-yellow">Category: {product.category}</p>
      <p className="mb-4 text-neon-green">Price: ${product.price}</p>
      <p className="mb-6">{product.description}</p>
      {product.image && (
        <img src={product.image} alt={product.name} className="rounded-xl" />
      )}
    </div>
  );
}
