require('dotenv').config();
const connectionString = process.env.endpint;
const hubName = 'RiaPubSubTest';

module.exports = {
    connectionString,
    hubName
};