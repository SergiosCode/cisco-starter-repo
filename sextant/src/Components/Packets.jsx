import React, { useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://localhost:55455");

const Packets = () => {
  const [latency, setLatency] = useState("");
  client.onopen = () => {
    console.log("WebSocket Client Connected");
  };

  client.onmessage = (message) => {
    let startTime = new Date();
    JSON.parse(message.data);

    setLatency(`${startTime - Number(message.data)} ms`);
  
  };

  client.onclose = () => {
    console.log("WebSocket Client Closed");
  };

  return (
    <div>
      <h2>{latency}</h2>
    </div>
  );
};

export default Packets;
