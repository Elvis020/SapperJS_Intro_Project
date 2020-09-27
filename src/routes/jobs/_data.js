import {LoremIpsum} from 'lorem-ipsum';

const lorem = new LoremIpsum;

export let jobs = [
    {
        id: '1',
        title: 'An assistant to the Clerk',
        salary: 20000,
        details: lorem.generateParagraphs(3)
    },
    {
        id: '2',
        title: 'AI selector of fruits in the market',
        salary: 400000,
        details: lorem.generateParagraphs(3)
    },
    {
        id: '3',
        title: 'Retail wholesaler for a clothing store in Thailand',
        salary: 760000,
        details: lorem.generateParagraphs(3)
    },
];

