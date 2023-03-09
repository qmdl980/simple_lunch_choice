import LunchCard from "../LunchCard/LunchCard";
import "./LunchList.css"

function LunchList() {
    return(
        <div className="lunch-list-wrapper box-wrapper">
            <div className="lunch-list-grid-wrapper">
                <LunchCard/>
                <LunchCard/>
                <LunchCard/>
                <LunchCard/>
                <LunchCard/>
                <LunchCard/>
                <LunchCard/>
                <LunchCard/>
                <LunchCard/>
                <LunchCard/>
                <LunchCard/>
                <LunchCard/>
            </div>
        </div>
    )
}

export default LunchList;