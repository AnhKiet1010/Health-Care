import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import routes from "./Routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return route.subRoutes ? (
            route.subRoutes.map((route) => (
              <Route
                key={route.path}
                exact
                path={route.path}
                element={<route.element />}
              />
            ))
          ) : (
            <Route
              key={route.path}
              exact
              path={route.path}
              element={<route.element />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
