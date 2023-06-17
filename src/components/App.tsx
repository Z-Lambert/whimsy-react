import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Home from "./Home";
import Dashboard from "./Dashboard";
import { sampleData } from "../sampleData";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard fanfictions={sampleData} />} />
    </Routes>

  )
}