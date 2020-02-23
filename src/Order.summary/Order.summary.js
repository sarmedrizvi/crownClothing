import React from "react";
import './Order.summary.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount, selectCartTotal } from "../Redux/Cart/Cart.Selector";
import { selectCurrentUser } from "../Redux/User/User.Selector";


const OrderSummary = ({ cartItemCount, totalCost, user }) => (
	<div className='order-summary'>
		<div className='order-detail'>
			<h4>Order summary</h4>
			<span>{`Subtotal (${cartItemCount} Items and shipping fee included) `}</span><br />
			<span><strong>{`Total : ${totalCost} Rs`}</strong></span>
		</div>
		<div className='order-customer'>
			<h4>Customer details</h4>
			<span>{user.name}</span><br />
			<span>{user.mail}</span><br />
			<strong>Delivery Address:''<span>{user.homeaddress}''</span></strong><br />
			<span>{user.customercity}</span><br />
			<span>{user.customercountry}</span><br />
			<span>{user.customerphone}</span><br />
		</div>

	</div>
)
const mapStateToProp = createStructuredSelector({
	cartItemCount: selectCartItemsCount,
	totalCost: selectCartTotal,
	user: selectCurrentUser
})
export default connect(mapStateToProp)(OrderSummary)
