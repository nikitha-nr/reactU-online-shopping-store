import React from 'react'
import { Route, Switch } from "react-router-dom";
import HomePage from '../pages/homepage'

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
    </Switch>
)

export default Router;