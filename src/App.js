import "./App.css";
import About from "./components/About/About";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <About />
    </div>
  );
}

export default App;
