import React from 'react';

// styles
import './step1-form-container.style.scss';

// component
import FormContainerNav from '../../common-component/form-container-nav/form-container-nav.component';

const Step1FormContainer = () => {
  return (
		<div className='step1-form-container'>
			<FormContainerNav />
		</div>
	);
}

export default Step1FormContainer;