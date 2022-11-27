import React from 'react';

// component
import BiodataNoContainer from '../common-component/biodata-no-container/biodata-no-container.component';
import Step4FormContainer from './step4-form-container.component';

// styles
import '../common-styles/Form.style.scss';

const Step4 = () => {
	return (
		<div className='step'>
			<BiodataNoContainer />
			<Step4FormContainer />
		</div>
	);
};

export default Step4;
