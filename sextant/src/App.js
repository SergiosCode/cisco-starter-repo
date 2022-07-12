import "./App.css";
import Header from "./Components/Header";
import DataComponent from "./Components/DataComponent";
import { getIPV4, getIPV6 } from "./api/getIP";

function App() {
  const user = "Sergio";
  const hour = new Date().getHours();
  const IPV4 = "https://api.ipify.org?format=json";
  const IPV6 = "https://api64.ipify.org?format=json";

  return (
    <div className="App">
      <Header />
      <h1 className="greeting">
        {hour >= 0 && hour <= 11 ? "Good Morning" : "Good Afternoon"}, <span> {user}</span>!
      </h1>

      {/* Change Title and Data variables to desired output */}
      {/* If you need to display an IP Address,
       add the IPType variable with value 'IPV4' or 'IPV6' */}
      <div className="dataContainer">
        <DataComponent title={"IPv4"} IPType="IPV4" />
        <DataComponent title={"IPv6"} IPType="IPV6" />
        <DataComponent title={"Latency"} data={"San Francisco, CA - 29.4 ms"} />
        <DataComponent title={"IP"} data={"92.91.73.53"} />
      </div>
    </div>
  );
}

export default App;
