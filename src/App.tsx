import { Fragment } from "react";
import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

import classes from "./App.module.css";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main className={`${classes.main} outer-wrapper`}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
