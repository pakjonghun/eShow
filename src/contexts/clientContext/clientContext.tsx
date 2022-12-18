import React, { createContext, useContext } from 'react';
import ApisInstance from '../../api';
import Clients from '../../api/clients';

export const ClientContext = createContext<null | { apis: ApisInstance }>(null);

const clients = new Clients();
const apis = new ApisInstance(clients);

interface Props {
  children: React.ReactNode;
}

function ClientProvider({ children }: Props) {
  return (
    <ClientContext.Provider value={{ apis }}>{children}</ClientContext.Provider>
  );
}

export default ClientProvider;

export function useClients() {
  const ctx = useContext(ClientContext);
  if (ctx == null) throw new Error('클라이언트가 존재하지 않습니다.');

  return ctx;
}
