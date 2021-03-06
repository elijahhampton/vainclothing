import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => (

    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/shop' className='option' onClick={() => console.log(currentUser)}>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    (<div 
                    className='option' 
                    onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>)
                    :
                    (<Link 
                        className='option' 
                        to='/signin'>
                            SIGN IN
                    </Link>)
                }
                <CartIcon />
            </div>
            {
                hidden ?
                null
                :
                (<CartDropdown />)
            }
    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
    currentUser: currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);