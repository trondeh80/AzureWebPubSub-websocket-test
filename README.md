# Azure webPubSub websocket test
Just some concept code for using azures new web pubsub.
Added a self restarting websocket that will reconnect to azure if network fails.

## To use
Run `npm i`

Copy .env-example file to .env in the root of the project.

Replace tre url with your endpoint url from azure portal. It looks like this: Endpoint=<a long url;>
Copy the url part and add it to endpoint.

## To run
`npm run server` will start a "server" listening for messages.

`npm run send-message "My Message here"` will send "My message here" to azure.