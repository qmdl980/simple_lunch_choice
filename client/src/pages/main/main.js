import { useEffect, useState } from "react";
import { socket } from "../../socket.js";
import InputDialog from "../../components/InputDialog/InputDialog";
import LunchList from "../../components/LunchList/LunchList";
import "./main.css";

function MainPage() {
  const [lunchList, setLunchList] = useState([]);
  const [userName, setUserName] = useState("");

  function onChangeUserInput(event) {
    setUserName(event.target.value);
  }

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
      <div className="lunch-list-title box-wrapper">
        <p>메뉴판</p>
      </div>
      <LunchList lunchList={lunchList} userName={userName} />
      <div className="input-user-wrapper">
        <div className="input-user-wrapper-wd40 box-wrapper">
          <input
            type={"text"}
            className="input-user"
            onChange={onChangeUserInput}
            value={userName}
            placeholder={"닉네임 ex)익명의 고라니"}
          />
        </div>
      </div>
      <InputDialog userName={userName} />
    </div>
  );
}

export default MainPage;
