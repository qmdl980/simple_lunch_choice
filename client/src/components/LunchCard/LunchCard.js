import "./LunchCard.css";
import { socket } from "../../socket.js";

function LunchCard(props) {
  function onClick(e) {
    if (props.userName.length > 0) {
      socket.emit("clickMenu", {
        id: props.menu.id,
        user: props.userName,
      });
    } else {
      alert("누군지 알려주세요");
    }
  }

  return (
    <div className="lunch-card box-wrapper" onClick={onClick}>
      <div>
        <p className="sm-bold">메뉴</p>
        <p className="menu-title prevent-overflow">{props.menu.name}</p>
      </div>
      <div className="menu-people">
        <p className="sm-bold">같이 먹을 사람</p>
        <p className="menu-people prevent-overflow">
          {props.menu.people.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default LunchCard;
