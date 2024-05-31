import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OneChat from "./pages/OneChat";
import GroupChat from "./pages/GroupChat";
import Instruction from "./pages/Instructions";
import About from "./pages/About";
import Error from "./pages/Error";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single-chat" element={<OneChat />} />
          <Route path="/group-chat" element={<GroupChat />} />
          <Route path="/instructions" element={<Instruction />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
