import React from "react";
import CounterComponent from "./components/CounterComponent";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Contador Avanzado
        </h1>
        <CounterComponent />
      </div>
    </div>
  );
}

export default App;
