import { Fragment } from "react";
import Header from "./layouts/Header";

import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

import classes from "./App.module.css";

function App() {
  const location = useLocation();

  return (
    <Fragment>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Header />
      )}
      <main className={`${classes.main} outer-wrapper`}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
