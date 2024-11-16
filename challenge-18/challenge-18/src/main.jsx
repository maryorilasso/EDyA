import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainApp from "./App";
import { UserProvider } from "./contex/useUserContext"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <MainApp />
    </UserProvider>
  </StrictMode>
);
