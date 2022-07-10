import "./App.css";
import Header from "./Components/Header";
import DataComponent from "./Components/DataComponent";

function App() {
  const user = "Sergio";
  const hour = new Date().getHours();

  return (
    <div className="App">
      <Header />
      <h1 className="greeting">
        {hour >= 0 && hour <= 11 ? "Good Morning" : "Good Afternoon"}, <span> {user}</span>!
      </h1>

      {/* Change Title and Data variables to desired output */}
      <div className="dataContainer">
        <DataComponent title={"IP"} data={"92.91.70.53"} />
        <DataComponent title={"Latency"} data={"San Francisco, CA - 29.4 ms"} />
        <DataComponent title={"IP"} data={"92.91.70.53"} />
        <DataComponent title={"IP"} data={"92.91.70.53"} />
      </div>
    </div>
  );
}

export default App;
