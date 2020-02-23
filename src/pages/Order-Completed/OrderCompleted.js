import React from 'react'
import './OrderCompleted.styles.scss'
import { InputButton } from '../../signIn-signUp/SignIn/Input-Button/Button'
import { withRouter } from 'react-router-dom'

 const OrderCompleted = ({history}) => (
	<div>
		<span>Your Order has been placed</span>
		<InputButton onClick={()=> history.push('/shop')}>Move to Shop</InputButton>
	</div>
)

export default withRouter(OrderCompleted)


