import './App.scss';
import SearchField from './components/SearchField/SearchField';
import bg from "./assets/images/weatherrr.jpg"
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <img className='background' src={bg} alt="background" />
      <SearchField />
      <Footer />
    </div>
  );
}

export default App;
