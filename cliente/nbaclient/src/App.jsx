import './App.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';
// Importa otros componentes necesarios



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PlayerList} />
        <Route exact path="/players/:id" component={PlayerForm} />
        {/* Configura otras rutas según tus necesidades */}
      </Switch>
    </Router>
  );
}

export default App;

