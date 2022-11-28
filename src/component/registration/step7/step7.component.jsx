import React from 'react';

// component
import BiodataNoContainer from '../common-component/biodata-no-container/biodata-no-container.component';
import Step7FormContainer from './step7-form-container.component';

// styles
import '../common-styles/Form.style.scss';

const Step7 = () => {
	return (
		<div className='step'>
			<BiodataNoContainer />
			<Step7FormContainer />
		</div>
	);
};

export default Step7;
