import React from 'react';
import StripeCheckout from 'react-stripe-checkout'



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_tOEjM5yOU0efNiQVGrt8s6VA007R8fNjZy'

    const onToken = token => {
        console.log(token)
        alert('Payment is successful')
    }
    return (
        <StripeCheckout
            label='pay Now'
            name='Softlamp Shopping ltd'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total price is ${price} Rs`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
            currency="PKR"
        />
    )
}

export default StripeCheckoutButton;