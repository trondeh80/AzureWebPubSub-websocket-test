const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const endpointUrl = process.env.endpoint;
if (!endpointUrl) {
    throw('No azure endpoint defined');
}

const connectionString = `Endpoint=${process.env.endpoint}`;
const hubName = 'RiaPubSubTest';

module.exports = {
    connectionString,
    hubName
};