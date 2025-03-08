import "./App.css";
import EarningCalendarWidget from "./widgets/EarningCalendarWidget";
import { getFormattedDate } from "./widgets/EarningCalendarWidget/utils";

function App() {
  const lastQuarter = new Date();
  lastQuarter.setMonth(lastQuarter.getMonth() - 3);

  return (
    <div className="App">
      <EarningCalendarWidget
        fromDate={getFormattedDate(lastQuarter)}
        toDate={getFormattedDate(new Date())}
      />
    </div>
  );
}

export default App;
