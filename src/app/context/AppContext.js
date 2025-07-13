'use client';

import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [members, setMembers] = useState([
    { id: 1, name: 'Hakim Magdy' },
    { id: 2, name: 'Clara Moheb' }
  ]);
  const [sports, setSports] = useState([
    { id: 1, name: 'Football' },
    { id: 2, name: 'Basketball' }
  ]);
  const [subscriptions, setSubscriptions] = useState({});

  return (
    <AppContext.Provider value={{ members, setMembers, sports, setSports, subscriptions, setSubscriptions }}>
      {children}
    </AppContext.Provider>
  );
}
