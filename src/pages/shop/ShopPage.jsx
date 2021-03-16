import React from 'react';
import SHOP_DATA from '../../common/shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

class ShopPage extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        collections: SHOP_DATA
    }
}

renderCollections = () => {
    const { collections } = this.state;
    return collections.map(({id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />
    })
}

render() {
    return (
        <div className='shop-page'>
            {this.renderCollections()}
        </div>
    )
}
}

export default ShopPage;