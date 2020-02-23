import React from 'react'
import './Checkout.pay.scss'
import  PaymentMethod  from '../../PaymentMethod/Payment.method'
import OrderSummary from '../../Order.summary/Order.summary'




export const CheckoutPay = () => (
	<div className='checkout-pay'>
		<h1>Select Payment Method</h1>
		<div className='checkout-order'>
			<PaymentMethod />
			<OrderSummary />
		</div>
	</div>
)