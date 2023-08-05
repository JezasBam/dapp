import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { useConfig } from '@useelven/core';

const About: NextPage = () => {
  const { chainType } = useConfig();

  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'mint', 'about']} />
      </HeaderMenu>
      <Box
        sx={{
          a: {
            color: 'elvenTools.color3.base',
          },
        }}
      >
        <Text
          as="h2"
          fontSize="4xl"
          fontWeight="black"
          mb={10}
          mt={{ xl: 6, '2xl': 16 }}
        >
          About
        </Text>
        <Text mb={4}>1
        test
        </Text>
        <Text mb={4}>
          test
        </Text>
        <Text mb={4}> 2
          This minting landing page will operate on proper collection on the
          {chainType}. So you will be able to test it, and you will be able to
          mint some NFTs with fake xEGLD .
        </Text>
        <Text mb={4}>3
        test
        </Text>
        <Text mb={4}>4
        test
        </Text>
        <Text>5
          test
        </Text>
      </Box>
    </MainLayout>
  );
};

export default About;
