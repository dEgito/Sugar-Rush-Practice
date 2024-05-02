import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
