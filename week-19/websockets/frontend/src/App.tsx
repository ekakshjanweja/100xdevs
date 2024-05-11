import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [lastMessage, setLastMessage] = useState("");
  const [sendMessage, setSendMessage] = useState("");

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");
    newSocket.onopen = () => {
      console.log("Connection established");
      newSocket.send("Hello Server!");
    };
    newSocket.onmessage = (message) => {
      console.log("Message received:", message.data);
      setLastMessage(message.data);
    };
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  return (
    <>
      <div style={{ flex: 1 }}>
        <input
          onChange={(e) => {
            setSendMessage(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <button
          onClick={() => {
            socket?.send(sendMessage);
          }}
        >
          Send Messgae
        </button>
        <br />
        <br />
        {lastMessage}
      </div>
    </>
  );
}

export default App;
