import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OneChat from "./pages/OneChat";
import Instruction from "./pages/Instructions";
import About from "./pages/About";
import Error from "./pages/Error";
import NSFW from "./pages/NSFW";
import Chatroom from "./pages/Chatroom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-chat" element={<OneChat />} />
        <Route path="/chatroom" element={<Chatroom />} />
        <Route path="/nsfw-chat" element={<NSFW />} />
        <Route path="/instructions" element={<Instruction />} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
