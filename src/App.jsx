import './App.css';
import ActivityBar from "./components/ActivityBar";
import Card from "./components/Card";
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActivityBar />
        <Card
          header={"Card Header"}
          title={"Card Title"}
          description={"description"}
          smallText={"yo"}
        />
      </header>
    </div>
  );
}

export default App;
