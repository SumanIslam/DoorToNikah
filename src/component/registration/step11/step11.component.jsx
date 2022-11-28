import React from 'react';

// component
import BiodataNoContainer from '../common-component/biodata-no-container/biodata-no-container.component';
import Step11FormContainer from './step11-form-container.component';

// styles
import '../common-styles/Form.style.scss';

const Step11 = () => {
	return (
		<div className='step'>
			<BiodataNoContainer />
			<Step11FormContainer />
		</div>
	);
};

export default Step11;
