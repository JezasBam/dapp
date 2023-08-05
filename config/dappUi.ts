// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'Test - Bam',
  description:
    'test more test.test test. test',
  image: `${dappHostname}/Orion.jpg`,
};

// FAQ section data
export const faq = [
  {
    question: 'What is an NFT on MultiversX?',
    answer:
      'The MultiversX protocol introduces native NFT .',
  },
  {
    question: 'test',
    answer:
      'functioneaza',
  },
  {
    question: 'test2',
    answer:
      'functioneaza2',
  },
];

// Roadmap section data
export const roadmap = [
  {
    title: 'Q1 2023',
    points: [
      'test1',
      'test2',
      'test3',
    ],
  },
  {
    title: 'Q2 2023',
    points: [
      'test',
      'test',
      'test',
    ],
  },
  {
    title: 'Q3 2023',
    points: [
      'test',
      'test',
      'test',
      'test',
    ],
  },
];

export const team = [
  {
    name: 'Bam',
    bio: 'Web designer and artist',
    imageUrl: '/Orion.jpg',
    socialMediaLinks: [
      'https://www.twitter.com',
      'https://www.behance.net',
      'https://www.dribbble.com',
    ],
  },
  {
    name: 'Bam',
    bio: 'Smart Contract programmer',
    imageUrl: '/Orion.jpg',
    socialMediaLinks: ['https://www.twitter.com', 'https://www.github.com'],
  },
  {
    name: 'Bam',
    bio: 'Community relations and marketing',
    imageUrl: '/Orion.jpg',
    socialMediaLinks: [
      'https://www.twitter.com',
      'https://www.discord.com',
      'https://www.telegram.me',
      'https://www.medium.com',
    ],
  },
];
