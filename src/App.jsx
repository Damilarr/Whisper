import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import Message from "./Pages/Message";
import MessageView from "./Pages/MessageView";
import AppContext from "./Components/Context";
function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/res/:uid" element={<Message />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
