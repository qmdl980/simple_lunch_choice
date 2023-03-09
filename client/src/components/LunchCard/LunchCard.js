import "./LunchCard.css";

function LunchCard(props) {
  return (
    <div className="lunch-card box-wrapper">
      <p className="menu-title prevent-overflow">{props.menu.name}</p>
      <p className="menu-people prevent-overflow">{props.menu.people}</p>
    </div>
  );
}

export default LunchCard;
