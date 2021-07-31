import React from 'react';
import { Card, Table, Tag } from 'antd';
import { ASSIGNMENTS } from '../__mocks__/data';

const Assignment = () => {
	const columns = [
		{
			title: 'Subject',
			dataIndex: 'subject',
			key: 'subject',
		},
		{
			title: 'Teachers',
			dataIndex: 'teachers',
			key: 'teachers',
		},

		{
			title: 'Status',
			key: 'status',
			dataIndex: 'status',
			render: (status) => {
				let color = 'green';
				if (status === 'drafted') {
					color = 'geekblue';
				} else if (status === 'pending') {
					color = 'orange';
				}
				//	let color = status === 'drafted' ? 'geekblue' : 'orange';
				return (
					<Tag
						color={color}
						key={status}
						style={{ textTransform: 'capitalize' }}
					>
						{status}
					</Tag>
				);
			},
		},
		{
			title: 'Submission Date',
			dataIndex: 'date',
			key: 'date',
		},
	];
	return (
		<div data-testid='attendance-card'>
			<Card title='Assignments'>
				<Table
					dataSource={ASSIGNMENTS}
					columns={columns}
					pagination={{ pageSize: 4 }}
					scroll={{ y: 240 }}
				/>
			</Card>
		</div>
	);
};

export default Assignment;
