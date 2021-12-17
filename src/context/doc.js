import React, { useState, useContext, useEffect } from 'react';
import { get } from 'axios';

export const DocContext = React.createContext({});

export const useDoc = () => {
  const context = useContext(DocContext);
  if (context === null) {
    throw new Error('useDoc must be used within a DocProvider');
  }
  return context;
};

export const DocProvider = ({ children }) => {
  const [vocabulary, setVocabulary] = useState(null);
  useEffect(() => {
    async function fetchMyAPI() {
      get('http://localhost:3000/vocabulary').then(({ data }) =>
        setVocabulary(data)
      );
    }

    fetchMyAPI();
  }, []);

  return (
    <DocContext.Provider value={{ vocabulary }}>{children}</DocContext.Provider>
  );
};

export default DocContext;
