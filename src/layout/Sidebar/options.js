import { lazy } from 'react';

const Demo = lazy(() => import('../../container/Demo'));
const Dashboard = lazy(() => import('../../container/Dashboard'));

export const menuItems = [
	{
		name: 'Dashboard',
		exact: true,
		to: '/',
		iconClassName: 'bi bi-speedometer2',
		component: Dashboard,
	},
	{
		name: 'Calender',
		exact: true,
		to: `/calender`,
		iconClassName: 'bi bi-speedometer2',
		component: Demo,
		// subMenus: [
		// 	{ name: 'Courses', to: '/content/courses' },
		// 	{ name: 'Videos', to: '/content/videos' },
		// ],
	},
	{
		name: 'Teachers',
		to: `/teachers`,
		iconClassName: 'bi bi-vector-pen',
		component: Demo,
	},
	{
		name: 'Course',
		exact: true,
		to: `/course`,
		iconClassName: 'bi bi-speedometer2',
		component: Demo,
		// subMenus: [
		// 	{ name: 'Courses', to: '/content-2/courses' },
		// 	{ name: 'Videos', to: '/content-2/videos' },
		// ],
	},
	{
		name: 'Attendance',
		to: `/attendance`,
		iconClassName: 'bi bi-vector-pen',
		component: Demo,
	},
	{
		name: 'Assignment',
		to: `/assignment`,
		iconClassName: 'bi bi-vector-pen',
		component: Demo,
	},
];
