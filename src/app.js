import React from "react";
import HomePage from './page/home/home';
import {Router,Link,IndexRoute,Route,hashHistory,browserHistory} from 'react-router';
import ListPage from './page/list/list';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MangerPage from './page/manger/mangerPage';
import WelcomePage from './page/welcome/index';
import LoginPage from './page/login/index';
import './static/css/reset.css';
import 'antd/dist/antd.less';
import './app.less'

class MainPage extends React.Component{
    render(){
        const {children} = this.props;
        return(
            <div className="main-page">
                <Header/>
                {children}
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
                <Route path="/manger" component={MangerPage}>
                    <IndexRoute component={WelcomePage}/>
                </Route>
                <Route path="/login" component={LoginPage}/>
            </Router>
        )
    }
}

export default App;