// in MessageParser.js
import React from "react";
import { useSelector } from "react-redux";

const MessageParser = ({ children, actions }) => {
  const data = useSelector((state) => state.studentData);
  const parse = (message) => {
    var regExp = /[a-zA-Z]/g;
    if (regExp.test(message)) {
      if (!data.name) {
        actions.handleName(message);
      } else {
        actions.handleAgeError();
      }
    } else if (!data.name) {
      actions.handleNameError();
    } else {
      actions.handleAge(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
