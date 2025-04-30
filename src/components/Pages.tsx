import { Route, Routes } from "react-router";
import SignInCard from "./Login/Login";
import RegisterCard from "./Register/register";
import Home from "./Home/Home";
import PostContainer from "./Posts/PostContinar";
import WeatherComp from "./Weather/WeatherComp";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/login" element={<SignInCard />} />
      <Route path="/register" element={<RegisterCard />} />
      <Route path="/post" element={<PostContainer />} />
      <Route path="/weather" element={<WeatherComp />} />
    </Routes>
  );
}
