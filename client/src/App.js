import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Search from './pages/Search';
import Result from './pages/Result';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact = 'true' path = '/' element = {
            <div>
              <Search />
            </div>
          }>
          </Route>
          <Route exact = 'true' path = '/summoner/:summonerName' element = {
            <div>
              <Result />
            </div>
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
