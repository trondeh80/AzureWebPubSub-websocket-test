const {WebPubSubServiceClient} = require('@azure/web-pubsub');
const WebSocket = require('ws');
const { connectionString, hubName } = require('./env');

async function main() {
  const [ message ] = process.argv.slice(2);
  console.log(typeof message);
  if (!message || typeof message !== 'string') {
    console.error('Usage: node send-message "Your message here"');
    return;
  }

  const serviceClient = new WebPubSubServiceClient(connectionString, hubName);
  // const token = await serviceClient.getAuthenticationToken();

  await serviceClient.sendToAll(message, { contentType: "text/plain" });
  console.log(`message: ${message} sent`);
}

main();