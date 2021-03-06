import React from 'react';
import { Text, Box, Center, VStack, useColorModeValue } from 'native-base';
import ThemeToggle from '../components/theme-toggle';

export default function MainScreen() {
  return <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} px={4} flex={1}>
    <VStack space={5} alignItems='center'>
      <Box bg={useColorModeValue('red.500', 'yellow.500')} p={10}>
        <Text>Hello</Text>
      </Box>
      <ThemeToggle />
    </VStack>
  </Center>;
}
