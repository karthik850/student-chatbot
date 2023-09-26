import { createChatBotMessage } from "react-chatbot-kit";
import Countdown from "./widgets/Countdown";
import GettingStarted from "./widgets/Gettingstarted";
import DateOptions from "./widgets/selectdate";
import TimeOptions from "./widgets/selectTime";

const config = {
  initialMessages: [
    createChatBotMessage("Hello, Welcome to student info system!", {
      withAvatar: true,
      delay: 300,
      widget: "gettingStarted",
    }),
  ],
  widgets: [
    {
      widgetName: "gettingStarted",
      widgetFunc: (props) => <GettingStarted {...props} />,
    },
    {
      widgetName: "timeOptions",
      widgetFunc: (props) => <TimeOptions {...props} />,
    },
    {
      widgetName: "dateOptions",
      widgetFunc: (props) => <DateOptions {...props} />,
    },
    {
      widgetName: "countDown",
      widgetFunc: (props) => <Countdown {...props} />,
    },
  ],
};

export default config;
