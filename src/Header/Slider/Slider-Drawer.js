import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Header from '../Header';
import './Slider-Drawer.scss'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		// border:'1px solid black'
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),

		backgroundColor: 'white'
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: 'black'
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		height: '100px',
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 2),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

const SliderDrawer = ({ user, history }) => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						{user.id ? <MenuIcon /> : null}
					</IconButton>
					<Typography variant="h6" noWrap>
						Profile
          			</Typography>
					<Header />
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>

				<div className={classes.drawerHeader}>
					<div className='profile'>
						Name: {user.name}
					</div>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					{
						['My orders', 'My profile', 'My vouchers', 'Help center', 'Invite friends'].map((text, index) => (
							<ListItem button key={text} onClick={() => { history.push(['/userOrders'][index]); handleDrawerClose() }}>
								<ListItemIcon><i className="material-icons">{['receipt', 'perm_identity', 'redeem', 'contact_support', 'stars'][index]}</i></ListItemIcon>
								<i>{text}</i>
							</ListItem>
						))
					}
				</List>
				<Divider />
				<List>
					{['Settings', 'Terms & Conditions/Privacy', 'Logout'].map((text, index) => (
						<ListItem button key={text}>
							<i>{text}</i>
						</ListItem>
					))}
				</List>
			</Drawer>
		</div>
	);
}

const mapStateToProps = (state) => ({
	user: state.user.currentUser
})
export default withRouter(connect(mapStateToProps)(SliderDrawer))