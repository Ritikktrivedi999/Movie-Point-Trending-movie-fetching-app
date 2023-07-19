import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Pagenotfound from "./components/PageNotFound";
import Favourite from "./components/Favourite";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies />
            </>
          }
        ></Route>
        <Route path="/*" element={<Pagenotfound />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
