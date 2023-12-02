import { useState } from "react";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      {/* <div className="text-center text-sm p-3 bg-gray-200 flex justify-center items-center space-x-3">
        <p className="bg-blue-500 text-white rounded-full mx-1 px-2">New</p>
        <p className="">Introducing Q&A - a new way to get answers in Notion.</p>
        <span className="font-bold">
          Sign up for Q&A waitlist
        </span>
      </div> */}
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
