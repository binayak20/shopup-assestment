import React, { useEffect, useState } from 'react';

import MenuItem from './MenuItem';
import { menuItems } from './options';

/**
 * @author
 * @function SideMenu
 **/
const SideMenu = (props) => {
	const [inactive, setInactive] = useState(false);

	useEffect(() => {
		if (inactive) {
			removeActiveClassFromSubMenu();
		}

		props.onCollapse(inactive);
	}, [inactive]);

	const removeActiveClassFromSubMenu = () => {
		document.querySelectorAll('.sub-menu').forEach((el) => {
			el.classList.remove('active');
		});
	};

	useEffect(() => {
		let menuItems = document.querySelectorAll('.menu-item');
		menuItems.forEach((el) => {
			el.addEventListener('click', (e) => {
				const next = el.nextElementSibling;
				removeActiveClassFromSubMenu();
				menuItems.forEach((el) => el.classList.remove('active'));
				el.classList.toggle('active');
				console.log(next);
				if (next !== null) {
					next.classList.toggle('active');
				}
			});
		});
	}, []);

	return (
		<div className={`side-menu ${inactive ? 'inactive' : ''}`}>
			<div className='top-section'>
				<div onClick={() => setInactive(!inactive)} className='toggle-menu-btn'>
					{inactive ? (
						<i className='bi bi-arrow-right-square-fill'></i>
					) : (
						<i className='bi bi-arrow-left-square-fill'></i>
					)}
				</div>
			</div>

			<div className='main-menu'>
				<ul>
					{menuItems.map((menuItem, index) => (
						<MenuItem
							key={index}
							name={menuItem.name}
							exact={menuItem.exact}
							to={menuItem.to}
							subMenus={menuItem.subMenus || []}
							iconClassName={menuItem.iconClassName}
							onClick={(e) => {
								if (inactive) {
									setInactive(false);
								}
							}}
						/>
					))}
				</ul>
			</div>

			<div className='side-menu-footer'>
				<div className='user-info'>
					<h5>Binayak Ray</h5>
				</div>
			</div>
		</div>
	);
};

export default SideMenu;
