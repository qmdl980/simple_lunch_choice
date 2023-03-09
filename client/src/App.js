import './App.css';
import InputDialog from './components/InputDialog/InputDialog';
import LunchList from './components/LunchList/LunchList';

function App() {
  return (
    <div className="App">
      <p>점심 먹자</p>
      <LunchList/>
      <InputDialog/>
    </div>
  );
}

export default App;
