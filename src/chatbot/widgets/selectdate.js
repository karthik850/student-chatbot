import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dateData } from "../../redux/actions/dateDataAction";
import { timeData } from "../../redux/actions/timeDataAction";
import Options from "./Options";
import "../../enable.css";

const DateOptions = (props) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [showData, setShowData] = useState(true);
  const [dates, setDates] = useState();
  let morningTimes = [
    {
      id: 0,
      data: { data: 9 },
    },
    {
      id: 1,
      data: { data: 10 },
    },
    {
      id: 2,
      data: { data: 11 },
    },
    {
      id: 3,
      data: { data: 12 },
    },
  ];
  let afternoonTimes = [
    {
      id: 0,
      data: { data: 2 },
    },
    {
      id: 1,
      data: { data: 3 },
    },
    {
      id: 2,
      data: { data: 4 },
    },
    {
      id: 3,
      data: { data: 5 },
    },
  ];
  useEffect(() => {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const newdates = [];
    let currentDate = new Date(today);

    while (currentDate <= nextWeek) {
      const dateObject = {
        data:
          "" +
          currentDate.getDate() +
          " " +
          currentDate.toLocaleString("default", { month: "short" }),
        dayOfWeek:
          "" + currentDate.toLocaleDateString("en-US", { weekday: "short" }),
      };

      newdates.push({ id: currentDate, data: dateObject });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setDates(newdates);
  }, []);
  const dateSelected = (date) => {
    setDate(date);
    dispatch(dateData(date));
  };
  const timeSelected = (time) => {
    dispatch(timeData(time));
    props.actionProvider.handleSlot(date + " " + time);
    var element = document.querySelector(".react-chatbot-kit-chat-input-form");
    element.style.display = "flex";

    setShowData(false);
  };
  return (
    <>
      {showData ? (
        <>
          {dates && (
            <Options
              options={dates}
              title={"Date"}
              dateSelected={dateSelected}
              {...props}
            />
          )}
          {date ? (
            <>
              <Options
                options={morningTimes}
                title={"Morning"}
                timeSelected={timeSelected}
                {...props}
              />
              <Options
                options={afternoonTimes}
                title={"Noon"}
                timeSelected={timeSelected}
                {...props}
              />
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default DateOptions;
