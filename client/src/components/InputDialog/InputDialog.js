import "./InputDialog.css";
import { socket } from "../../socket.js";
import { useState } from "react";

function InputDialog(props) {
  const [menuName, setMenuName] = useState("");

  function onChangeMenuInput(event) {
    setMenuName(event.target.value);
  }

  function onSubmit(event) {
    if (menuName.length > 0) {
      if (props.userName.length > 0) {
        socket.emit("submit", {
          user: props.userName,
          name: menuName,
        });
        setMenuName("");
      } else {
        alert("누군지 알려주세요");
      }
    } else {
      alert(`"아무거나"는 좀 그래요...`);
    }
  }

  return (
    <div className="input-dialog-wrapper box-wrapper">
      <input
        type={"text"}
        className="input-menu"
        onChange={onChangeMenuInput}
        value={menuName}
        placeholder={"메뉴 ex)김치떡볶이"}
      />
      <button className="submit-btn" onClick={onSubmit}>
        이거 먹자
      </button>
    </div>
  );
}

export default InputDialog;
