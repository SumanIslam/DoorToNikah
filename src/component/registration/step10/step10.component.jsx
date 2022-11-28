import React from 'react';

// component
import BiodataNoContainer from '../common-component/biodata-no-container/biodata-no-container.component';
import Step10FormContainer from './step10-form-container.component';

// styles
import '../common-styles/Form.style.scss';

const Step10 = () => {
	return (
		<div className='step'>
			<BiodataNoContainer />
			<Step10FormContainer />
		</div>
	);
};

export default Step10;
