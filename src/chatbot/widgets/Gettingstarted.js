import Button from "@mui/joy/Button";
import { useState } from "react";

import "../../disable.css";

const GettingStarted = (props) => {
  const [showdata, setShowdata] = useState(true);
  const handleStarted = () => {
    setShowdata(false);
    props.actionProvider.handleGettingStarted();
  };
  return (
    <>
      {showdata ? (
        <Button onClick={handleStarted} style={{ left: "30%" }}>
          Got It
        </Button>
      ) : null}
    </>
  );
};

export default GettingStarted;
