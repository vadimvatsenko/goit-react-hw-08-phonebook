// import Section from "./section";
// import Contacts from "./contacts";
// import Form from "./form/form";
// import Filter from './filter';
import { Routes, Route } from "react-router-dom";
import Header from "./header/header";

export const App = () => {

  return (
    <Routes>
      
    <Route path="/" element={<Header/>}/>
    <Route path="*" element={<p>No Content</p>} />
    </Routes>
  );
}


