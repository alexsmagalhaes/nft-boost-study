"use client"

import React, { ReactNode, createContext, useState } from 'react';

//hooks
import useFetch from "@/hooks/useFetch";

// Criando o contexto
export const DataContext = createContext({});

// Provedor do contexto
export const DataProvider = ({ children }: { children: ReactNode }) => {

   const [value, setValue] = useState(null);

   setValue(useFetch("http://localhost:3000/nft"));

   return (
      <DataContext.Provider value={{ value, setValue }}>
         {children}
      </DataContext.Provider>
   );
};

export default DataContext;
