import React, {Component} from 'react';
import Header from './header';
import Menu from './menu';
import Footer from './footer';
import HomeContent from './HomeContent';
import './app.scss';

class Home extends Component {
    render(){
        return(
            <div className="home">
                <Header/>
                <Menu/>
                <HomeContent/>
                <Footer/>
            </div>
        )
    }
}

export default Home;