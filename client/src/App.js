import './App.css';
import InputDialog from './components/InputDialog/InputDialog';
import LunchList from './components/LunchList/LunchList';
import { useEffect, useState } from "react";

function App() {
  const [lunchList, setLunchList] = useState([]);
  
  useEffect(() => {
    setLunchList([
        {id: 1, name: '국밥', people: 1},
        {id: 2, name: '국밥', people: 2},
        {id: 3, name: '국밥', people: 3},
        {id: 4, name: '국밥', people: 4},
        {id: 5, name: '국밥', people: 5},
        {id: 6, name: '국밥', people: 6},
        {id: 7, name: '국밥', people: 7},
        {id: 8, name: '국밥', people: 8},
        {id: 9, name: '국밥', people: 9},
        {id: 10, name: '국밥', people: 10},
        {id: 11, name: '국밥', people: 11},
    ]);
  }, []);

  return (
    <div className="App">
      <p>점심 먹자</p>
      <LunchList lunchList={lunchList}/>
      <InputDialog/>
    </div>
  );
}

export default App;
