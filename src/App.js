import './App.css';
import MainPage from './Components/MainPage';
import Country from './Components/Country';
import Nav from './Components/Nav';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { GlobalStorage } from './GlobalContext'

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage className="App">
        <Nav />
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/countries/:id" element={<Country />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
