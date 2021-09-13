const { User } = require('../models');

const userData = [
    {
        username: 'swimteampie',
        password: 'password'
    },
    {
        username: 'savatage',
        password: 'contrasena'
    },
    {
        username: 'sugarlump',
        password: 'passwort'
    },
    {
        username: 'wingnut',
        password: 'heslo'
    },
    {
        username: 'cheapshot',
        password: 'le-mot-de-passe'
    },
    {
        username: 'goldbrick',
        password: "muw'lj"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;