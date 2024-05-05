import React from "react";

function Navbar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

// Home component
function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// App component
function App() {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      
      {/* Home component */}
      <Home />
      
      {/* About component */}
      <About />
    </div>
  );
}

export default App;
