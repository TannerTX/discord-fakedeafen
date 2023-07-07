const originalSend = WebSocket.prototype.send;
WebSocket.prototype.send = function(data) {
  const textDecoder = new TextDecoder("utf-8");

  if (data instanceof ArrayBuffer) {
    const decodedData = textDecoder.decode(data);
    if (decodedData.includes("self_deaf")) {
      console.log("found mute/deafen");
      const modifiedData = decodedData.replace('"self_mute":false', 'NiceOneDiscord');
      data = textEncoder.encode(modifiedData);
      console.log("faked - borkgang.com");
    }
  }

  originalSend.call(this, data);
};

