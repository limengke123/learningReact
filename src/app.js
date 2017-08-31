import React from "react";
import HomePage from './page/home';
import {Router,Link,IndexRoute,Route,hashHistory} from 'react-router';
import ListPage from './page/list';
import Header from './components/header';

class MainPage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}


class App extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path='/' component={MainPage}>
                    <IndexRoute component={HomePage}/>
                    <Route path="/list" component={ListPage}/>
                </Route>
            </Router>
        )
    }
}

export default App;