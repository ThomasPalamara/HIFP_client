import { Box, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { useDoc } from '../context/doc';

const Vocabulary = () => {
  const [pickedWord, setPickedWord] = useState(null);

  const { vocabulary } = useDoc();
  const pickRandomWord = () =>
    setPickedWord(vocabulary[Math.floor(Math.random() * vocabulary.length)]);

  useEffect(() => {
    if (vocabulary) pickRandomWord();
  }, [vocabulary]);

  if (!vocabulary || !pickedWord) return null;

  return <Card newWord={pickRandomWord} word={pickedWord}></Card>;
};

export default Vocabulary;
