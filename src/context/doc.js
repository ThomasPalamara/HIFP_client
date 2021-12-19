import React, { useState, useContext, useEffect } from 'react';
import { get } from 'axios';

const apiURL = 'https://hannah-in-france-project.herokuapp.com/vocabulary';

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
  console.log('apiUrl :', apiURL);
  useEffect(() => {
    async function fetchMyAPI() {
      get(apiURL).then(({ data }) => setVocabulary(data));
    }

    fetchMyAPI();
  }, []);

  return (
    <DocContext.Provider value={{ vocabulary }}>{children}</DocContext.Provider>
  );
};

export default DocContext;
