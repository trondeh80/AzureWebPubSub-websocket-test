const {WebPubSubServiceClient} = require('@azure/web-pubsub');
const WebSocket = require('ws');
const {connectionString, hubName} = require('./env');

let timeout;
async function main() {
  const serviceClient = new WebPubSubServiceClient(connectionString, hubName);
  const token = await serviceClient.getAuthenticationToken();
  openWebSocket();

  function openWebSocket() {
    try {
      const ws = new WebSocket(token.url);
      ws.on('open', () => console.log('connected'));
      ws.on('message', handleIncomingMessage);
      ws.on('close', onClose);
      ws.on('error', () => console.log('error'));
    } catch (e) {
      console.log(e);
      openWebSocketLater();
    }
  }

  function openWebSocketLater() {
    console.log('Restarting socket');
    timeout && clearInterval(timeout);
    timeout = setTimeout(openWebSocket, 2000);
  }

  function onClose() {
    console.log('closed');
    openWebSocketLater();
  }
}

function handleIncomingMessage(message) {
  console.log(message);
}

main();
