import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import AppLoginYRegistro from '../Containers/AppLoginYRegistro';
import AppPrincipal from '../Containers/AppPrincipal'
import DetallesProductos from '../Containers/DetallesProductos';


function About() {
    return ( 
            <Router>
                 <Switch>
                     <Route  path="/inicio" component={AppPrincipal} />
                     <Route  path="/detalles" component={DetallesProductos} />
                     <Route  path="/" component={AppLoginYRegistro} />
                 </Switch>
           </Router>
     );
}
 
export default About;