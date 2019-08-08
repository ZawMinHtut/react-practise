import React,{Component} from 'react';
import Logo from './Logo.png';

class Header extends Component {
    render(){
        return(
            <div className="container-fluid header">
                <img src={Logo} alt="Logo"/>
            </div>
        )
    }
}

export default Header;