import "./App.css";
import SvgWrapper from "./SvgWrapper";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SvgWrapper type="phone" />
        <SvgWrapper type="calendar" />
      </header>
    </div>
  );
}

export default App;
