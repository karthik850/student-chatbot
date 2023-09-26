// in ActionProvider.jsx
import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { ageData } from "../redux/actions/ageDataAction";
import { nameData } from "../redux/actions/nameDataAction";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
  const handleName = (data) => {
    const botMessage = createChatBotMessage("Enter Age");
    dispatch(nameData(data));
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleAge = (data) => {
    const botMessage = createChatBotMessage(
      "Thank you !! In 5 seconds page will be closed",
      {
        widget: "countDown",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );
    dispatch(ageData(data));
    var element = document.querySelector(".react-chatbot-kit-chat-input-form");
    element.style.display = "none";
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleCountDown = (data) => {
    const botMessage = createChatBotMessage(
      "Thank you !! In " + data + " seconds page will be closed"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage].splice(-1, 1),
    }));
  };
  const handleGettingStarted = () => {
    const botMessage = createChatBotMessage("Pick a slot!", {
      widget: "dateOptions",
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    });
    const userMessage = createClientMessage("Got It!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage],
    }));
  };
  const handleSlot = (data) => {
    const userMessage = createClientMessage(data);
    const botMessage = createChatBotMessage("Enter name");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage],
    }));
  };
  const handleNameError = () => {
    const botMessage = createChatBotMessage("Enter Valid name");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleAgeError = () => {
    const botMessage = createChatBotMessage("Enter Valid age in numbers");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleName,
            handleGettingStarted,
            handleSlot,
            handleAge,
            handleCountDown,
            handleNameError,
            handleAgeError
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
