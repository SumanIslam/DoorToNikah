import React from "react";

// component
import Header from "../component/header/header.component";
import TitleBanner from '../component/title-banner/title-banner.component';
import PolicyMain from "../component/policy-main/policy-main.component";
import Footer from '../component/footer/footer.component';

const PrivacyPolicy = () => {
  return (
		<>
			<Header />
			<TitleBanner title='প্রাইভেসি পলিসি' />
      <PolicyMain />
      <Footer />
		</>
	);
}

export default PrivacyPolicy;