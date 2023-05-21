import { Route, Routes } from "react-router";
import Navbar from "./component/Navbar";
import CounterPage from "./pages/CounterPage";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
      </Routes>
      <CounterPage />
    </>

  );
}

export default App;
