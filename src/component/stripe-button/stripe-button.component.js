import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51KilYGFvUiW4NArZYw01JooteI0wDvE5eVG0fgMLm0IzgZfdLkXeBe2S7WlWdDcFytBc4fb4Za0mq4UfzqaeeUIr00yjimKAkb'

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout 
			label="Pay Now"	
			name="Luxury-Line"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;