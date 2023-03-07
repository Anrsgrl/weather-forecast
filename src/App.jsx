import './App.scss';
import SearchField from './components/SearchField/SearchField';
import bg from "./assets/images/weatherrr.jpg"


function App() {
  return (
    <div className="App">
      <img className='background' src={bg} alt="background" />
      <SearchField />
    </div>
  );
}

export default App;
