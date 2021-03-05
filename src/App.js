import './App.less';
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import sotre from './redux/store'
import Login from "./containers/login/login";
import Register from "./containers/register/register";
import Main from "./containers/main/main";

function App() {
    return (
        <Provider store={sotre}>
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route component={Main}></Route>
                </Switch>
            </HashRouter>
        </Provider>
    );
}

export default App;
