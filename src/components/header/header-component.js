import React from 'react';
import './header-styles.scss';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div className='header'>
            <Link to='/'><h3>DERNIER TRENDS</h3></Link>
            <div className='options' >
                <Link className = 'option' to='/shop' > SHOP </Link>
                <Link className = 'option' to='/CONTACT' > CONTACT </Link>
                <Link className = 'option' to='/signin' > SIGN IN </Link>
            </div>
        </div>
    )
}

export default Header;



