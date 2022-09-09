import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { DisplayData } from "./components/DisplayData";
import { EntryDetails } from "./components/Details";

function App() {
  const [newdata, setNewdata] = useState([]);

  function getdata() {
    axios
      .get("http://localhost:8080/details")
      .then((res) => {
        setNewdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="App">
      <EntryDetails pros={getdata} />
      <DisplayData pros={{ newdata, getdata }} />
    </div>
  );
}

export default App;
