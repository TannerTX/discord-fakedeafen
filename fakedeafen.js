const originalSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(data) {
  if (data instanceof ArrayBuffer && new TextDecoder("utf-8").decode(data).includes("self_deaf")) {
    data = new TextEncoder().encode(new TextDecoder().decode(data).replace('"self_mute":false', 'Hahahapeep'));
  }
  originalSend.call(this, data);
};
