import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';

import Films from './pages/films';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/films/:episode_id" component={Films} />
        </Switch>
    </BrowserRouter>
);

export default Routes;