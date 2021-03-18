import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';

import ContainedButton from '../contained-button/ContainedButton';

import './styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <ContainedButton>
            GO TO CHECKOUT
        </ContainedButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);