import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Principal from './pages/Principal';
import Palindromos from './pages/Palindromos';
import TrocoNotas from './pages/TrocoNotas';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Principal } />
                <Route path="/palindromos" exact component={ Palindromos } />
                <Route path="/troco_notas" exact component={ TrocoNotas } />
            </Switch>
        </BrowserRouter>
    );
}