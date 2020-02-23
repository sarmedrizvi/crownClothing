import React from 'react'
import './Payment.method.scss'
import cash from '../assets/moneyLogo.png'
import card from '../assets/creditcard.png'
import banking from '../assets/internetBanking.png'
import easyPaisa from '../assets/easypaisa.png'
import jazzCash from '../assets/jazzcash.png'
// import { InputButton } from '../signIn-signUp/SignIn/Input-Button/Button'
import StripeCheckoutButton from '../Stripe-Button/Stripe-Button-Component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartTotal, selectCartItems } from '../Redux/Cart/Cart.Selector'
import { selectCurrentUser } from '../Redux/User/User.Selector'
import { MessageBox } from '../MessageBox/MessageBox'
import { withRouter } from 'react-router-dom'
import { changeAllItems } from '../Redux/Cart/Cart.Actions'


class PaymentMethod extends React.Component {
	state = {
		loading: 'Wait...',
		button: false,
		buttonCard: false,
	}
	OrderComplete = () => {
		// this.props.dispatch(changeAllItems([]))
		fetch('http://localhost:3000/completeOrder', {
			method: 'post',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				Customer: this.props.Customer,
				cartItems: this.props.cartItems
			})
		}).then(res => res.json())
			.then(res => {
				if (res) {

					this.setState({ loading: res })
				}
			})
			.catch(console.log)
	}

	OnMessageBoxDoneClick = () => {
		this.props.history.push('/Checkout/OrderPlaced')
	}
	render() {
		const { totalcost } = this.props;

		return (
			<div className='payment'>
				<div className='payment-method'>
					<div className='payment-method-all' onClick={() => this.setState({ button: true })}>
						<img className='image' src={cash} alt='cash on delivery' />
						<span>Cash on delivery</span>
					</div>
					<div className='payment-method-all'
						onClick={() => {
							this.setState({ button: false })
							this.setState({ buttonCard: true })
						}}
					>
						<img className='image' src={card} alt='cash on delivery' />
						<span>Credit/Debit Card</span>
					</div>
					<div className='payment-method-all'>
						<img className='image' src={banking} alt='cash on delivery' />
						<span>Internet Banking</span>
					</div>
					<div className='payment-method-all'>
						<img className='image' src={easyPaisa} alt='easy paisa' />
						<span>EasyPaisa Wallet</span>
					</div>
					<div className='payment-method-all'>
						<img className='image' src={jazzCash} alt='easy paisa' />
						<span>JazzCash</span>
					</div>

				</div>
				{
					this.state.button ?
						<MessageBox body={'Confirm Order'} onContactClick={this.OrderComplete} title={'Order'} innerText={this.state.loading} onDoneClick={this.OnMessageBoxDoneClick} />
						:
						this.state.buttonCard ?
							<StripeCheckoutButton price={totalcost} />
							:
							null
				}
				<label>*Once order is placed,It cannot be cancelled.</label>
			</div>
		)
	}
}

const mapStateToProp = createStructuredSelector({
	totalcost: selectCartTotal,
	Customer: selectCurrentUser,
	cartItems: selectCartItems,

})

export default withRouter(connect(mapStateToProp)(PaymentMethod))
// gaditek
