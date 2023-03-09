import "./InputDialog.css";

function InputDialog() {

  function onSubmit(event) {
    console.log("submit");
  }

  return (
    <div className="input-dialog-wrapper box-wrapper">
      <input type={"text"} className="input-lunch" />
      <button className="submit-btn" onClick={onSubmit}>제출</button>
    </div>
  );
}

export default InputDialog;
