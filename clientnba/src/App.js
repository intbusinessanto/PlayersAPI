import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PlayerList from './components/PlayersList.jsx';
// import Player from './components/Player.jsx';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PlayerList></PlayerList>}></Route>
          {/* <Route path='/player/:id' element={<Player></Player>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
