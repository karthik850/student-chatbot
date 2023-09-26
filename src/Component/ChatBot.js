import React, { useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser";
import config from "../chatbot/config";
import "react-chatbot-kit/build/main.css";
import { useSelector } from "react-redux";

const MyChatBot = () => {
  const data = useSelector((state) => state.studentData);
  useEffect(() => {
    var element = document.querySelector(".react-chatbot-kit-chat-input-form");
    element.style.display = "none";
  }, []);
  return (
    <div className="app-chatbot-container">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        headerText='Student Info ChatBot'
      />
    </div>
  );
};

export default MyChatBot;
