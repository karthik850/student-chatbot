import Button from "@mui/material/Button";
import Typography from "@mui/joy/Typography";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/joy/Box";

const Options = (props) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [value, setValue] = useState(0);
  const [zone, setZone] = useState("am");

  const handleChange = (data) => {
    setSelectedValue(data.data);
    props.title === "Date"
      ? props.dateSelected(data.data + "," + data.dayOfWeek)
      : props.title === "Morning"
      ? props.timeSelected(data.data + " AM")
      : props.timeSelected(data.data + " PM");
  };
  return (
    <div>
      <Typography color="success" sx={{ textAlign: "left" }}>
        {props.title}
      </Typography>
      {/* <Stack direction="row" spacing={1}> */}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        spacing={1}
      >
        <Box sx={{ display: "flex", gap: 2, flexWrap: "initial" }}>
          {Object.values(props.options).map((option) => {
            return (
              <Button
                variant={
                  selectedValue === option.data.data ? "contained" : "outlined"
                }
                onClick={() => handleChange(option.data)}
              >
                {option.data.data}
                <br />
                {props.title === "Date" ? <>{option.data.dayOfWeek}</> : null}
              </Button>
            );
          })}
        </Box>
      </Tabs>
      {/* </Stack> */}
    </div>
  );
};

export default Options;
