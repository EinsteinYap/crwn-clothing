import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  //above ({price}) --> is a property
    const priceForStripe = price * 100;
    //change this key for other owners --> the key are different for everyone
  const publishableKey = 'pk_test_51I4HQ5G5woLrxOrpid44YXUnTfPrCs7QYtiMSuaGIcJZ44meRfcbIFpTD23QKdmBgyfOuMRvtTCxPzAo4nhabqqo00i4Gv3wAZ';

  const onToken = token => {
  axios({
    url:'payment',
    method:'post',
    data:{
      amount:priceForStripe,
      token
    }
  }).then(response=>{
    alert('Payment Successful')

  }).catch(error=>{
    console.log('Payment Error:',JSON.parse(error));
    alert(
      'There was an issue with your payment.Please make sure you key in correct details.'
    );
  })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      // image={'../../asset/crown.svg'}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;