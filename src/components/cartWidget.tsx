'use client';
import React from 'react';

import { useCart } from '@/contexts/cartContext';
import { ShoppingBag } from 'lucide-react';

export default function CartWidget() {
  const { items } = useCart();
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="size-4" />
      <span className="text-sm">Car ({items.length})</span>
    </div>
  );
}
