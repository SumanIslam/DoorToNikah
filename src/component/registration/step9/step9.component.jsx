import React from 'react';

// component
import BiodataNoContainer from '../common-component/biodata-no-container/biodata-no-container.component';
import Step9FormContainer from './step9-form-container.component';

// styles
import '../common-styles/Form.style.scss';

const Step9 = () => {
	return (
		<div className='step'>
			<BiodataNoContainer />
			<Step9FormContainer />
		</div>
	);
};

export default Step9;
