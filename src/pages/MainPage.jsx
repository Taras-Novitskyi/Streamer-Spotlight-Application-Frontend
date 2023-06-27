import React, { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

// import { AddStreamerForm } from "../components/AddStreamerForm/AddStreamerForm";

const MainPage = () => {
  const [socket, setSocket] = useState(null);
  const [chat, setChat] = useState([]);

  useEffect(() => {
    setSocket(io("http://localhost:3001"));
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("message-from-server", (data) => {
      setChat((prev) => [...prev, { data: data, received: true }]);
    });
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("send-message", {
      name: e.target.name.value,
      platform: e.target.platform.value,
      description: e.target.description.value,
    });
    setChat((prev) => [
      ...prev,
      {
        data: {
          name: e.target.name.value,
          platform: e.target.platform.value,
          description: e.target.description.value,
        },
        received: false,
      },
    ]);
  };

  return (
    // <AddStreamerForm />
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" />
        <input name="description" type="text" />
        <select name="platform">
          <option>Twitch</option>
          <option>YouTube</option>
          <option>TikTok</option>
          <option>Kick</option>
          <option>Rumble</option>
        </select>
        <button type="submit">add Streamer</button>
      </form>
      <ul>
        {chat.map((item, i) => {
          return (
            <li
              key={i}
              style={{
                display: "block",
                textAlign: item.received ? "left" : "right",
              }}
            >
              {item.data.name}, {item.data.platform}, {item.data.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainPage;
