import React from "react";
import { Route, Routes } from "react-router-dom";
import Game from "./components/Game/Game";

const App = () => {
  return (
    <Routes>
      <Route path="/:id?" element={<Game />} />
    </Routes>
  );
};

export default App;
