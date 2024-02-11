'use client';
import React from 'react';

import { useCart } from '@/contexts/cartContext';
export interface AddCartButtonProps {
  productId: number;
}

export default function AddCartButton({ productId }: AddCartButtonProps) {
  const { addToCart } = useCart();

  function handleAddProduct() {
    addToCart(productId);
  }
  return (
    <button
      type="button"
      onClick={handleAddProduct}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      {' '}
      Adicionar ao Carrinho
    </button>
  );
}
