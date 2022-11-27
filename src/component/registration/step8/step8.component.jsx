import React from 'react';

// component
import BiodataNoContainer from '../common-component/biodata-no-container/biodata-no-container.component';
import Step8FormContainer from './step8-form-container.component';

// styles
import '../common-styles/Form.style.scss';

const Step8 = () => {
	return (
		<div className='step'>
			<BiodataNoContainer />
			<Step8FormContainer />
		</div>
	);
};

export default Step8;
