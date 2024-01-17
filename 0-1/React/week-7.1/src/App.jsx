import React, { useState, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Landing } from "../components/Landing";

const DashBoard = React.lazy(() => import("../components/DashBoard"));
const Name = React.lazy(() => import("../components/Name"));
const name = "avi";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense>
                <DashBoard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path={name}
            element={
              <Suspense>
                <Name />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Landing Page</button>
      <button onClick={() => navigate("/dashboard")}>DashBoard Page</button>
      <button onClick={() => navigate(name)}>Name Page</button>
    </div>
  );
}

export default App;
