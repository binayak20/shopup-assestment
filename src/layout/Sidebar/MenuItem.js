import React from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * @author
 * @function MenuItem
 **/

const MenuItem = ({ name, subMenus, iconClassName, to, onClick }) => {
	return (
		<li onClick={onClick}>
			<Link exact to={to} className={`menu-item`}>
				<div className='menu-icon'>
					<i className={iconClassName}></i>
				</div>
				<span>{name}</span>
			</Link>
			{subMenus && subMenus.length > 0 ? (
				<ul className={`sub-menu`}>
					{subMenus.map((menu, index) => (
						<li key={index}>
							<NavLink to={menu.to}>{menu.name}</NavLink>
						</li>
					))}
				</ul>
			) : null}
		</li>
	);
};

export default MenuItem;
