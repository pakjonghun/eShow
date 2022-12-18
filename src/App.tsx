import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import ClientProvider from './contexts/clientContext/clientContext';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ClientProvider>
        <Header />
        <Outlet />
      </ClientProvider>
    </QueryClientProvider>
  );
};
export default App;
