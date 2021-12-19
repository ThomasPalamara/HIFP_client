import { Box, Button, Center, HStack, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { capitalize } from 'lodash';

const Card = ({ word, newWord }) => {
  const [reveal, setReveal] = useState(false);
  const [hint, setHint] = useState(-1);
  if (!word) return null;
  const outOfHints = hint >= word.french.length || 0;
  const onReveal = () => {
    if (!reveal) {
      setReveal(true);
    } else {
      setReveal(false);
      setHint(-1);
      newWord();
    }
  };
  const onHint = () => {
    if (!outOfHints) setHint(hint + 1);
  };

  const answerText = () => {
    if (reveal) {
      return capitalize(word.french);
    } else if (hint > -1) {
      return capitalize(
        [...word.french]
          .map((char, i) => {
            if (i < hint) {
              return char;
            } else {
              switch (char) {
                case ' ':
                  return ' .';
                case '/':
                  return ' /';
                case "'":
                  return char;
                default:
                  return ' _';
              }
            }
          })
          .join('')
      );
    }
    return '?';
  };
  return (
    <VStack>
      <Box
        minWidth="full"
        rounded="lg"
        py="12"
        px="3"
        mb="10"
        shadow="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'white',
        }}
      >
        <Center>
          <Box minH={20} display="flex" justifyContent="center" mb={7}>
            <Text fontSize="3xl" fontWeight="bold">
              {capitalize(word.english)}
            </Text>
          </Box>

          <Box minH={20} display="flex" justifyContent="center">
            <Text fontSize="3xl">{answerText()}</Text>
          </Box>
        </Center>
      </Box>

      <Box>
        <HStack justifyContent="space-around">
          <Button
            onPress={onHint}
            minW="24"
            py="4"
            rounded="lg"
            isDisabled={outOfHints || reveal}
            colorScheme="darkBlue"
            _web={{ mr: 4 }}
          >
            <Text fontSize="lg" fontWeight="bold" color="white">
              Hint
            </Text>
          </Button>

          <Button
            onPress={onReveal}
            minW="24"
            rounded="lg"
            colorScheme={!reveal ? 'amber' : 'success'}
          >
            <Text fontSize="lg" fontWeight="bold" color="white">
              {reveal ? 'Next' : 'Answer'}
            </Text>
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
