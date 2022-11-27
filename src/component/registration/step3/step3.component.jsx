import React from 'react';

// component
import BiodataNoContainer from '../common-component/biodata-no-container/biodata-no-container.component';
import Step3FormContainer from './step3-form-container.component';

// styles
import '../common-styles/Form.style.scss';

const Step3 = () => {
	return (
		<div className='step'>
			<BiodataNoContainer />
			<Step3FormContainer />
		</div>
	);
};

export default Step3;
