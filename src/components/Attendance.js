import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Select } from 'antd';
import { PercentageOutlined } from '@ant-design/icons';
import { MARKS } from '../__mocks__/data';

const { Option } = Select;

const Attendance = () => {
	const [selectedMarks, setMark] = useState(MARKS[0]);
	//	console.log(selectedMarks);
	const handleChangeSemister = (semester) => {
		console.log(semester);
		const mark = MARKS.find((element) => element.semester === semester);
		setMark(mark);
		console.log(mark);
	};
	return (
		<div data-testid='attendance-card'>
			<Card>
				<Row gutter={16}>
					<Col span={12}>
						<Statistic
							title='Attentance'
							value={selectedMarks.attendance}
							suffix={<PercentageOutlined />}
						/>
						<div className='margin-top-15'>
							<span>Semester</span>
							<Select
								defaultValue='1'
								style={{ width: 120 }}
								onChange={handleChangeSemister}
							>
								{MARKS.map((mark, index) => (
									<Option value={mark.semester} key={index}>
										{mark.semester}
									</Option>
								))}
							</Select>
						</div>
					</Col>
					<Col span={12}>
						<Row gutter={16} className='margin-top-10'>
							<Col span={12}>
								<Statistic
									style={{ lineHeight: 1.15715 }}
									title='Accounts'
									valueStyle={{ fontSize: 15 }}
									value={selectedMarks.total.accounts}
									suffix='/ 100'
								/>
							</Col>
							<Col span={12}>
								<Statistic
									style={{ lineHeight: 1.15715 }}
									title='Inc Tax'
									valueStyle={{ fontSize: 15 }}
									value={selectedMarks.total.inc_tax}
									suffix='/ 100'
								/>
							</Col>
						</Row>
						<Row gutter={16} className='margin-top-10'>
							<Col span={12}>
								<Statistic
									style={{ lineHeight: 1.15715 }}
									title='Bus Study'
									valueStyle={{ fontSize: 15 }}
									value={selectedMarks.total.bus_study}
									suffix='/ 100'
								/>
							</Col>
							<Col span={12}>
								<Statistic
									style={{ lineHeight: 1.15715 }}
									title='Frence'
									valueStyle={{ fontSize: 15 }}
									value={selectedMarks.total.french}
									suffix='/ 100'
								/>
							</Col>
						</Row>
						<Row gutter={16} className='margin-top-10'>
							<Col span={12}>
								<Statistic
									style={{ lineHeight: 1.15715 }}
									title='Economics'
									valueStyle={{ fontSize: 15 }}
									value={selectedMarks.total.economics}
									suffix='/ 100'
								/>
							</Col>
							<Col span={12}>
								<Statistic
									style={{ lineHeight: 1.15715 }}
									title='Com. Skill'
									valueStyle={{ fontSize: 15 }}
									value={selectedMarks.total.com_skill}
									suffix='/ 100'
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default Attendance;
