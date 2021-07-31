import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SideMenu from './layout/Sidebar/SideMenu';
import { menuItems } from './layout/Sidebar/options';

import { Spin } from 'antd';
import './App.css';

function App() {
	const [inactive, setInactive] = useState(false);

	return (
		<div className='App'>
			<Router>
				<SideMenu
					onCollapse={(inactive) => {
						console.log(inactive);
						setInactive(inactive);
					}}
				/>
				<Suspense fallback={<Spin size='large' />}>
					<div className={`container ${inactive ? 'inactive' : ''}`}>
						{menuItems.map((menu, index) => (
							<div key={index}>
								<Route key={menu.name} exact={menu.exact} path={menu.to}>
									<menu.component />
								</Route>
							</div>
						))}
					</div>
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
