import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './componentes/home/Home';
import Nosotros from './componentes/nosotros/Nosotros';
import Servicios from './componentes/servicios/Servicios';
import Contacto from './componentes/contacto/Contacto';

function App() {
  return (
    <Router>
      <div>
        <Switch>
            {/* Páginas */}
            <Route exact path='/' component={Home} />
            <Route path='/nosotros' component={Nosotros} />
            <Route path='/servicios' component={Servicios} />
            <Route path='/contacto' component={Contacto} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
