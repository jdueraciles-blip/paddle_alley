
import React from "react";
import PickleballLoader from "./components/PickleballLoader";
import "./App.css";

const App: React.FC = () => {
  return (
    <PickleballLoader>
      <main className="app-main">
        <h1>Pickleball Alley</h1>
        <p>Welcome to our pickleball website.</p>
      </main>
    </PickleballLoader>
  );
};

export default App;
