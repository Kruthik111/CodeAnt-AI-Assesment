import { lazy } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import CodeReview from "./Pages/CodeReview";
import NotFound from "./Components/NotFound";

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
          {/* <Route path="ai-code-review" element={<CodeReview />} /> */}

          {/*  <Route path="cloud-Security" element={<Repository />} />
          <Route path="how-to-use" element={<Repository />} />
          <Route path="settings" element={<Repository />} />
          <Route path="support" element={<Repository />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
