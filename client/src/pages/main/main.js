import { useEffect, useState } from "react";
import { socket } from "../../socket.js";
import InputDialog from "../../components/InputDialog/InputDialog";
import LunchList from "../../components/LunchList/LunchList";
import "./main.css";

function MainPage() {
  const [lunchList, setLunchList] = useState([]);

  useEffect(() => {
    socket.on("newMenu", (newLunchList) => {
      setLunchList(newLunchList);
    });
  }, []);

  return (
    <div className="main-page-wrapper">
      <div className="main-title-wrapper box-wrapper">
        <p className="main-title">오늘 뭐 먹지?</p>
      </div>
      <LunchList lunchList={lunchList} />
      <InputDialog />
    </div>
  );
}

export default MainPage;
