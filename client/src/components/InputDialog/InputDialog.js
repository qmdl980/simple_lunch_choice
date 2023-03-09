import "./InputDialog.css";
import { socket } from "../../socket.js";
import { useState } from "react";

function InputDialog() {
  const [menuName, setMenuName] = useState("");

  function onChange(event) {
    setMenuName(event.target.value);
  }

  function onSubmit(event) {
    if(menuName.length > 0) {
      socket.emit("submit", {
        name: menuName,
      });
      setMenuName("");
    } else {
      alert(`"아무거나"는 좀 그래요...`);
    }
  }

  return (
    <div className="input-dialog-wrapper box-wrapper">
      <input type={"text"} className="input-lunch" onChange={onChange} value={menuName} />
      <button className="submit-btn" onClick={onSubmit}>
        이거 먹자
      </button>
    </div>
  );
}

export default InputDialog;
