import './App.css';
import MainPage from './Components/MainPage';
import { GlobalStorage } from './GlobalContext'

function App() {
  return (
    <GlobalStorage className="App">
      <MainPage />
    </GlobalStorage>
  );
}

export default App;
