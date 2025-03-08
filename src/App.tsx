import "./App.css";
import EarningWidget from "./widgets/EarningWidget";
import { getFormattedDate } from "./widgets/EarningWidget/utils";

function App() {
  const lastQuarter = new Date();
  lastQuarter.setMonth(lastQuarter.getMonth() - 3);

  return (
    <div className="App">
      <EarningWidget
        fromDate={getFormattedDate(lastQuarter)}
        toDate={getFormattedDate(new Date())}
      />
    </div>
  );
}

export default App;
