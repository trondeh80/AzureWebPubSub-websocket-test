# Azure webPubSub websocket test
Just some concept code for using azures new web pubsub.
Added a self restarting websocket that will reconnect to azure if network fails.

## To use
Run `npm i`
Create a webpubsub project in azure.
Get the endpoint data.
Copy .env-example file to .env in the root of the project.
Add your endpoint url from azure portal. It looks like this: Endpoint=<a long url;>
Copy the url part and add it to endpoint. .env should start like this: endpoint=https://.....

## To run
`node src/server.js` will start a "server" listening for messages.

`node src/send-message.js "My Message here"` will send "My message here" to azure.