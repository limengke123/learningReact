import React from "react";
import HomePage from './page/home/home';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import ListPage from './page/list/list';
import SpiderPage from './page/spiderPage/index';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MangerPage from './page/manger/mangerPage';
import WelcomePage from './page/welcome/index';
import UserList from './page/userList/index';
import ArticleAdd from './page/addArticle/index';
import LoginWrapper from './page/loginWrapper/index';
import LoginPage from './page/login/login';
import RegisterPage from './page/register/index';
import './static/css/reset.css';
//import 'antd/dist/antd.less';
//import 'react-quill/dist/quill.snow.css';
import './app.less'

class MainPage extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <div className="main-page">
                <Header/>
                {children}
                <Footer/>
            </div>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={MainPage}>
                    <IndexRoute component={HomePage}/>
                    <Route path="/list" component={ListPage}/>
                    <Route path="/spider" component={SpiderPage}/>
                </Route>
                <Route path="/manger" component={MangerPage}>
                    <IndexRoute component={WelcomePage}/>
                    <Route path='/user/list' component={UserList}/>
                    <Route path='/article/add' component={ArticleAdd}/>
                </Route>
                <Route path="/signIn" component={LoginWrapper}>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                </Route>
            </Router>
        )
    }
}

export default App;