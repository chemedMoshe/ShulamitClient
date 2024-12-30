import { Route, Routes } from "react-router";
import SignInCard from "./Login/Login";
import RegisterCard from "./Register/register";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/login" element={<SignInCard/>} />
      <Route path="/register" element={<RegisterCard/>} />
    </Routes>
  )
}
