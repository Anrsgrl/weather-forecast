import './App.scss';
import SearchField from './components/SearchField/SearchField';
import bg from "./assets/images/weatherrr.jpg"

function App() {
  return (
    <div className="App">
      <img src={bg} alt="" />
      <SearchField />
    </div>
  );
}

export default App;
