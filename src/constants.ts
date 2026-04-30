import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Industrial Glass Bottle v1',
    price: 15,
    description: 'High-durability industrial bottle for chemical and beverage storage.',
    category: 'Bottle1',
    image: '/images/products/bottle-glass.jpg'
  },
  {
    id: '2',
    name: 'Reinforced Polymer Bottle',
    price: 45,
    description: 'Precision-engineered polymer container for laboratory grade materials.',
    category: 'Bottle2',
    image: '/images/products/bottle-polymer.jpg'
  },
  {
    id: '3',
    name: 'Aero-Grade Steel Bottle',
    price: 12,
    description: 'Lightweight steel alloy container for high-pressure industrial liquids.',
    category: 'Bottle3',
    image: '/images/products/bottle-steel.jpg'
  },
  {
    id: '4',
    name: 'Eco-Protection Bottle',
    price: 35,
    description: 'Sustainable biodegradable container for environmentally conscious logistics.',
    category: 'Bottle4',
    image: '/images/products/bottle-eco.jpg'
  }
];
