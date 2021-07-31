import React from 'react';
import Assignment from './Assignment';

const AssignmentBlock = () => {
	return (
		<>
			<div data-testid='select-subject'>
				{/* your table section should be added here */}
				<Assignment />
			</div>
		</>
	);
};

export default AssignmentBlock;
