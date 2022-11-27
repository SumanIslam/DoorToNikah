import React from 'react';

// component
import BiodataNoContainer from '../common-component/biodata-no-container/biodata-no-container.component';
import Step5FormContainer from './step5-form-container.component';

// styles
import '../common-styles/Form.style.scss';

const Step5 = () => {
	return (
		<div className='step'>
			<BiodataNoContainer />
			<Step5FormContainer />
		</div>
	);
};

export default Step5;
