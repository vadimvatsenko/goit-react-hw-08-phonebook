
import { Routes, Route } from "react-router-dom";
import Nav from "./navigation/Nav";
import Home from "pages/Home";
import Register from "pages/Register";
import Login from "pages/Login";


export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        
      </Route>

      <Route path="*" element={<div>Nothing</div>} />

    </Routes>
  );
}


