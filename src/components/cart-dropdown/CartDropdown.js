import React from 'react';

import ContainedButton from '../contained-button/ContainedButton';

import './styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <ContainedButton>
            GO TO CHECKOUT
        </ContainedButton>
    </div>
)

export default CartDropdown;