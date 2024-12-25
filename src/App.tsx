import { lazy } from "react";
import { Route, Routes } from "react-router";
import "./App.css";

// Lazy loading for faster loading
const Login = lazy(() => import("./Pages/Login"));
const Layout = lazy(() => import("./Layouts/MainLayout"));
const Repository = lazy(() => import("./Pages/Repository"));
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="repository" element={<Repository />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
