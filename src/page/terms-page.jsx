import React from 'react';

// component
import Header from '../component/header/header.component';
import TitleBanner from '../component/title-banner/title-banner.component';
import TermsMain from '../component/terms-main/terms-main.component';
import Footer from '../component/footer/footer.component';

const TermsCondition = () => {
	
	return (
		<>
			<Header />
			<TitleBanner title='শর্তাবলি' />
      <TermsMain />
      <Footer />
		</>
	);
};

export default TermsCondition;