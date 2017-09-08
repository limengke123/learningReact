import React from "react";
import {Router,Link,IndexRoute,Route,hashHistory,browserHistory} from 'react-router';
import HomePage from './page/home/home';
import ListPage from './page/list/list';
import NotePage from './page/note/notePage';
import Header from './components/header/header';
import Footer from './components/footer/footer';
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
            <Router history={hashHistory}>
                <Route path='/' component={MainPage}>
                    <IndexRoute component={HomePage}/>
                    <Route path="/list" component={ListPage}/>
                    <Route path="/note" component={NotePage}/>
                </Route>
            </Router>
        )
    }
}

export default App;