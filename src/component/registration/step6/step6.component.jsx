import React from 'react';

// component
import BiodataNoContainer from '../common-component/biodata-no-container/biodata-no-container.component';
import Step6FormContainer from './step6-form-container.component';

// styles
import '../common-styles/Form.style.scss';

const Step6 = () => {
	return (
		<div className='step'>
			<BiodataNoContainer />
			<Step6FormContainer />
		</div>
	);
};

export default Step6;
