import React from 'react';

// component
import BiodataNoContainer from '../common-component/biodata-no-container/biodata-no-container.component';
import Step1FormContainer from './step1-form-container.component';

// styles
import '../common-styles/Form.style.scss'

const Step1 = () => {
  return (
    <div className='step'>
      <BiodataNoContainer />
      <Step1FormContainer />
    </div>
  )
}

export default Step1;