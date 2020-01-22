import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import About from './components/page/About';
import UserPage from './components/page/UserPage';
import InputForm from './components/form/InputForm';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route component={App} />
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route path="/about" component={About} />
                        <Route path="/users" component={UserPage} />
                        <Route path="/test" component={InputForm} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;
