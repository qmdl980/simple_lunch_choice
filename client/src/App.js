import "./App.css";
import InputDialog from "./components/InputDialog/InputDialog";
import LunchList from "./components/LunchList/LunchList";
import { useEffect, useState } from "react";
import { socket } from "./socket.js";

function App() {
  const [lunchList, setLunchList] = useState([]);

  useEffect(() => {
    socket.on("newMenu", (newLunchList) => {
      setLunchList(newLunchList);
    });
  }, []);

  return (
    <div className="App">
      <p>점심 먹자</p>
      <LunchList lunchList={lunchList} />
      <InputDialog />
    </div>
  );
}

export default App;
