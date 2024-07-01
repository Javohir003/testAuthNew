import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Dashboard/Pages/Profile";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
      </Route>
    )
  );

  return (
    <>
      <div className="App">
        <div className="container">
          <RouterProvider router={routes} />
        </div>
      </div>
    </>
  );
}

export default App;
