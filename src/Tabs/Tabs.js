import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FormHelperText } from '@material-ui/core';
import './Tabs.scss'
export const DisabledTabs = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Paper square style={{ display: 'flex', justifyContent: 'center', width: '70vw',borderRadius:'23px' }}
		>
			<Tabs
			
				className='Tabs'
				value={value}
				indicatorColor="primary"
				textColor="primary"
				onChange={handleChange}
				aria-label="disabled tabs example"
				

			>
				<Tab label="Current Orders" className='Tab' />
				{/* <Tab label="" disabled className='Tab' /> */}
				<Tab label="Past Orders" className='Tab'/>
			</Tabs>
		</Paper>
	);
}