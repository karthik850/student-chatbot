import logo from "./logo.svg";
import "./App.css";
import MyChatBot from "./Component/ChatBot";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Component/Home";
import Confirmation from "./Component/Confirmation";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import "./overall.css";

function App() {
  return (
    <>
      {/* <CssBaseline />
    <Container className="App"> */}
      <Box sx={{ alignItems: "center", height: "100%" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chatbot" element={<MyChatBot />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </BrowserRouter>
      </Box>
      {/* </Container> */}
    </>
  );
}

export default App;
