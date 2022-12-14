import React, { useState } from 'react'

// component
import Header from '../component/header/header.component';
import Footer from '../component/footer/footer.component';
import BiodatasPageForm from '../component/biodatas-page-form/biodatas-page-form.component';

const BiodatasPage = () => {
  const [biodatas, setBiodatas] = useState('');
  console.log(biodatas);
  return (
    <>
      <Header />
      <BiodatasPageForm setBiodatas={setBiodatas} />
      <Footer />
    </>
  )
}

export default BiodatasPage;