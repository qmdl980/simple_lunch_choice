import "./InputDialog.css";
import { socket } from "../../socket.js";
import { useState } from "react";

function InputDialog() {
  const [menuName, setMenuName] = useState("");

  function onChange(event) {
    setMenuName(event.target.value);
  }

  function onSubmit(event) {
    socket.emit("submit", {
      name: menuName,
    });
  }

  return (
    <div className="input-dialog-wrapper box-wrapper">
      <input type={"text"} className="input-lunch" onChange={onChange} />
      <button className="submit-btn" onClick={onSubmit}>
        제출
      </button>
    </div>
  );
}

export default InputDialog;
