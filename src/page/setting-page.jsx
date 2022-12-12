import React from 'react'

import Header from '../component/header/header.component'
import Footer from '../component/footer/footer.component'
import BiodataNoContainer from '../component/registration/common-component/biodata-no-container/biodata-no-container.component'
import SettingMain from '../component/setting-main/setting-main.component'

// style
import '../component/profile/profile.style.scss'

const SettingPage = () => {
  return (
    <>
      <Header />
      <div className='setting-container'>
        <BiodataNoContainer />
        <SettingMain />
      </div>
      <Footer />
    </>
  )
}

export default SettingPage