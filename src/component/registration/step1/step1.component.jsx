import React from 'react';

// component
import BiodataNoContainer from './biodata-no-container/biodata-no-container.component';
import Step1FormContainer from './step1-form-container/step1-form-container.component';

// styles
import './step1.styles.scss'

const Step1 = () => {
  return (
    <div className='step1'>
      <BiodataNoContainer />
      <Step1FormContainer />
    </div>
  )
}

export default Step1;