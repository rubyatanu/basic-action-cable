import consumer from "./consumer"

consumer.subscriptions.create("OyoroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    //console.log("hell yeah!")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(data)
    // Called when there's incoming data on the websocket for this channel
  }
});
