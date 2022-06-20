import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Search from './pages/Search';
import Result from './pages/Result';

function App() {
  return (
    <div>
      
      <BrowserRouter basename='/carry' forceRefresh={true}>
        <Routes>
          <Route exact path = '/' element = {
            <div>
              <Search />
            </div>
          }>
          </Route>
          <Route exact path = '/:summonerName' element = {
            <div>
              <Result />
            </div>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
