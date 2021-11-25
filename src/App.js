import "./App.css";
import { CardList, SearchSelect, TotalCard } from "./components";

function App() {
  return (
    <div className="container">
      <SearchSelect />
      <div className="row">
        <div className="row__cards">
          <CardList />
        </div>
        <div className="row__card">
          <TotalCard />
        </div>
      </div>
    </div>
  );
}

export default App;
