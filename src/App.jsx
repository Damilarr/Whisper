import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Message from "./Pages/Message";
import AppContext from "./Components/Context";
import NotFound from "./Components/NotFound";
const LazyDashBoard = React.lazy(() => import("./Components/Dashboard"));
function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/:uid" element={<Message />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <React.Suspense fallback="loading...">
                <LazyDashBoard />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
