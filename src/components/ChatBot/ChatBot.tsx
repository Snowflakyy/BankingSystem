import React, { FormEvent, useState } from "react";
import axios from "axios";
import Chats from "./Chats/Chats";
import "./ChatBot.scss";

export const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<string>("");
  const [sendUserResponse, setSendUserResponse] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // setMessage(e.target.value);
      setSendUserResponse(message);
      const res = await axios.post("http://localhost:5000/api/chatbot", {
        message,
      });
      setResponse(res.data.response); // Bot's response
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="chat-container">
      <Chats
        userResponse={message}
        botResponse={response}
        sendUserResponse={sendUserResponse}
      />

      <form onSubmit={(e) => sendMessage(e)} className="form-container">
        <input onChange={(e) => handleInputChange(e)} value={message}></input>
        <button>
          {" "}
          Send
          <i className="far fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

