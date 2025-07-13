'use client';

import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
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
