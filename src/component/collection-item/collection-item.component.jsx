import React from 'react';
import { connect } from 'react-redux';


import CustomButton from '../custom-button/custom-button.component';
import { addCartItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({item, addCartItem}) => {
	const { name, price, imageUrl } = item; 
	
  return (
		<div className='collection-item'>
			<div 
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			
			>
			
			</div>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
				<CustomButton inverted>
					<span onClick={() => addCartItem(item)} >Add to cart</span>
				</CustomButton>
		</div>
	)
}

const mapDispatchToProp = (dispatch) => ({
	addCartItem: (item) => dispatch(addCartItem(item))
});

export default connect(
	null,
	mapDispatchToProp,
)(CollectionItem);