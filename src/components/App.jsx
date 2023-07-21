import "../styles/App.css";
import Header from "./Header";
import TipCalculator from "./TipCalculator";

function App() {
  return (
    <div className="App">
      <Header>
        <h1>Tip Calculator 💸💳💵</h1>
      </Header>
      <TipCalculator />
    </div>
  );
}

export default App;
