import React from 'react';

// component
import BiodataNoContainer from '../common-component/biodata-no-container/biodata-no-container.component';
import Step2FormContainer from './step2-form-container/step2-form-container.component';

// styles
import './step2.style.scss';

const Step2 = () => {
	return (
		<div className='step2'>
			<BiodataNoContainer />
			<Step2FormContainer />
		</div>
	);
};

export default Step2;
