import React from 'react';

// components
import BiodatasPageForm from '../biodatas-page-form/biodatas-page-form.component';
import BiodatasShowcase from '../biodatas-showcase/biodatas-showcase.component';

const TotalBiodata = () => {
  return (
    <div>
      <BiodatasPageForm admin={true} />
      <BiodatasShowcase admin={true} />
    </div>
  );
};

export default TotalBiodata;