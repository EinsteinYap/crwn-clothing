import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  //above ({price}) --> is a property
    const priceForStripe = price * 100;
    //change this key for other owners --> the key are different for everyone
  const publishableKey = 'pk_test_51I01RqL2GjRBJmINmgNvJ0xofLGWD6W024lYOIReYLVySUGob5Zg2Dun4vZcxN7TWzZ4230wABzuZYtE8JVyV8nb00GxNThKx8';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;