import React from 'react'
import './Checkout.Main.styles.scss'
import { Route} from 'react-router-dom'
import CheckoutComponent from '../Checkout.component'
import { CheckoutPay } from '../Checkout-Pay/Checkout.pay'
import  OrderCompleted  from '../Order-Completed/OrderCompleted'
export const CheckoutMain = ({ match }) => (
	<div>
			<Route exact path={`${match.path}`} component={CheckoutComponent} ></Route>
			<Route exact path={`${match.path}/pay`} component={CheckoutPay} ></Route>
			<Route exact path={`${match.path}/OrderPlaced`} component={OrderCompleted} ></Route>
		
	</div>
)