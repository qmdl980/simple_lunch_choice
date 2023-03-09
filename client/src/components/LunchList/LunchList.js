import LunchCard from "../LunchCard/LunchCard";
import "./LunchList.css";

function LunchList(props) {
  return (
    <div className="lunch-list-wrapper box-wrapper">
      <div className="lunch-list-grid-wrapper">
        {props.lunchList.map((menu) => (
          <LunchCard menu={menu} userName={props.userName} />
        ))}
      </div>
    </div>
  );
}

export default LunchList;
