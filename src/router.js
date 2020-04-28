import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import * as page from './pages'
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={page.HomePage}></Route>
            <Route path="/slides" component={page.SlidePage}></Route>
            <Route path="/benefits" component={page.BenefitPage}></Route>
            <Route path="/activities" component={page.ActivityPage}></Route>
            <Route path="/differences" component={page.DifferencePage}></Route>
            <Route path="/feedbacks" component={page.FeedbackPage}></Route>
            <Route path="/populars" component={page.PopularPage}></Route>
            <Route path="/register" component={page.RegisterPage}></Route>

        </Switch>
    </BrowserRouter>
)

export default Routes;