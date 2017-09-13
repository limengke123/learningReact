import React from "react";
import HomePage from './page/home/home';
import {Router,Link,IndexRoute,Route,hashHistory,browserHistory} from 'react-router';
import ListPage from './page/list/list';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MangerPage from './page/manger/mangerPage';
import './static/css/reset.css';
import './app.less'
class MainPage extends React.Component{
    render(){
        return(
            <div className="main-page">
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}


class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/' component={MainPage}>
                    <IndexRoute component={HomePage}/>
                    <Route path="/list" component={ListPage}/>
                </Route>
                <Route path="/manger" component={MangerPage}/>
            </Router>
        )
    }
}

export default App;