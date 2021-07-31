import React, { useState } from 'react';
import { Card, Select } from 'antd';
import { MARKS } from '../__mocks__/data';
const { Option } = Select;

const CGPACards = () => {
	const [selectedMarks, setMark] = useState(MARKS[0]);
	const handleChangeSemister = (semester) => {
		const mark = MARKS.find((element) => element.semester === semester);
		setMark(mark);
	};
	return (
		<div data-testid='cgpa-cards'>
			<Card
				title='Performance (CGPA)'
				style={{ marginTop: 20 }}
				extra={
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
				}
			>
				<div className='cgpa-container'>
					{Object.keys(selectedMarks.cgpa).map((gpa, index) => (
						<div className='cgpa-card' key={index}>
							<span className='font-cgpa'>{selectedMarks.cgpa[gpa]}</span>
							<p>{gpa}</p>
						</div>
					))}
				</div>
			</Card>
		</div>
	);
};

export default CGPACards;
