import React from 'react';
import ContainedButton from '../contained-button/ContainedButton';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './styles.scss';

const CollectionItem =  ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
    <div className='collection-item'>
        <div
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <ContainedButton onClick={() => addItem(item)} inverted>
                Add to cart
            </ContainedButton>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);