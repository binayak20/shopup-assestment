import React from 'react';
import { Col, Row } from 'antd';
import AttendanceBlock from '../../components/AttendanceBlock';

import PerformanceBlock from '../../components/PerformanceBlock';
import ScheduleBlock from '../../components/ScheduleBlock';
import AssignmentBlock from '../../components/AssignmentBlock';
import UploadAssignment from '../../components/UploadAssignment';

const Dashboard = () => {
	return (
		<>
			<Row gutter={16}>
				<Col span={8}>
					<AttendanceBlock />
					<PerformanceBlock />
				</Col>
				<Col span={16}>
					<ScheduleBlock />
				</Col>
			</Row>
			<Row gutter={16} style={{ marginTop: 20 }}>
				<Col span={16}>
					<AssignmentBlock />
				</Col>
				<Col span={8}>
					<UploadAssignment />
				</Col>
			</Row>
		</>
	);
};

export default Dashboard;
