import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { AboutPage, HomePage, LoginPage, Dashboard, NotFoundPage } from "./pages/index";
import MainNavBar from "./components/MainNavBar";
import AuthProtectedRoute from "./utils/AuthProtectedRoute";
import { useUserAuth } from "./contex/useUserContext"; 

const App = () => {
  return (
    <>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<AuthProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Ruta para la página 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

const AppWithRouter = () => {
  const location = useLocation();
  const { dispatch } = useUserAuth();

  useEffect(() => {
    if (location.pathname !== "/login") {
      dispatch({ type: "SET_LAST_PAGE", payload: location.pathname });
    }
  }, [location.pathname, dispatch]);

  return <App />;
};

const MainApp = () => (
  <Router>
    <AppWithRouter />
  </Router>
);

export default MainApp;
