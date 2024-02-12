"use client"

import { useEffect, useState } from "react";

export default function useFetch(url: string): any {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(url);
            
            if (!response.ok) {
               throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
         
         } catch (error: any) {
            setError(error);
         } finally {
            setLoading(false);
         }
      };

      fetchData();

   }, [url]);

   return { data, loading, error };
};