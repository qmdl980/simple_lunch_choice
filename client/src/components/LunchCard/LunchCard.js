import "./LunchCard.css";
import { socket } from "../../socket.js";

function LunchCard(props) {
  function onClick(e) {
    socket.emit("clickMenu", {
      id: props.menu.id,
    });
  }

  return (
    <div className="lunch-card box-wrapper" onClick={onClick}>
      <p className="menu-title prevent-overflow">{props.menu.name}</p>
      <p className="menu-people prevent-overflow">{props.menu.people}</p>
    </div>
  );
}

export default LunchCard;
