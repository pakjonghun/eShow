import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useClients } from '../contexts/clientContext/clientContext';

function useProducts() {
  const { apis } = useClients();
  const getProducts = useQuery(['products'], () => apis.products());

  return { getProducts };
}

export default useProducts;
