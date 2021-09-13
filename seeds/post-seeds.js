const { Post } = require('../models');

const postData = [
    {
        title: 'Here is a post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1 
    },
    {
        title: 'Another post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 2
    },
    {
        title: 'Here is yet another post',
        content: 'Aenean pharetra magna ac placerat vestibulum. Sapien nec sagittis aliquam malesuada bibendum arcu. Orci eu lobortis elementum nibh tellus.',
        user_id: 3
    },
    {
        title: 'A post about nothing',
        content: 'At quis risus sed vulputate odio ut enim blandit. Et netus et malesuada fames. At in tellus integer feugiat scelerisque varius morbi enim nunc. Tortor posuere ac ut consequat.',
        user_id: 2
    },
    {
        title: 'I like trains',
        content: 'I like trains',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;