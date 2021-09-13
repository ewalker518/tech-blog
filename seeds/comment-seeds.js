const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        post_id: 3,
        user_id: 2
    },
    {
        comment_text: 'Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Posuere morbi leo urna molestie.',
        post_id: 1,
        user_id: 1
    },
    {
        comment_text: 'Nullam non nisi est sit amet facilisis magna etiam tempor. Egestas sed sed risus pretium quam vulputate dignissim.',
        post_id: 2,
        user_id: 3
    },
    {
        comment_text: 'Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Sagittis id consectetur purus ut faucibus pulvinar. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.',
        post_id: 5,
        user_id: 6
    },
    {
        comment_text: 'Tortor posuere ac ut consequat. Sollicitudin aliquam ultrices sagittis orci a.',
        post_id: 4,
        user_id: 4
    },
    {
        comment_text: 'Penatibus et magnis dis parturient. Sed viverra tellus in hac habitasse platea. Sit amet dictum sit amet justo donec enim diam vulputate.',
        post_id: 2,
        user_id: 5
    },
    {
        comment_text: 'Cras semper auctor neque vitae tempus quam. Mauris sit amet massa vitae tortor condimentum lacinia. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Enim praesent elementum facilisis leo vel.',
        post_id: 4,
        user_id: 2
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;