import './App.scss';
import SearchField from './components/SearchField/SearchField';
import bg from "./assets/images/weatherrr.jpg"
import WeatherModal from './components/WeatherModal/WeatherModal';

function App() {
  return (
    <div className="App">
      <img className='background' src={bg} alt="background" />
      <SearchField />
      <WeatherModal />
    </div>
  );
}

export default App;
