"use client"

import React, { ReactNode, createContext, useState } from 'react';

//hooks
import useFetch from "@/hooks/useFetch";

export const DataContext: any = createContext({});

export const DataProvider = ({ children }: { children: ReactNode }) => {
   const [dataNft, setDataNft] = useState({});

   return (
      <DataContext.Provider value={{dataNft, setDataNft}}>
         {children}
      </DataContext.Provider>
   );
};

export default DataContext;
