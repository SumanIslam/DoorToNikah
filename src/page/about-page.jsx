import React from "react";

// component
import Header from "../component/header/header.component";
import TitleBanner from "../component/title-banner/title-banner.component";
import AboutMain from '../component/about-main/about-main.component';
import Footer  from '../component/footer/footer.component'

const AboutUs = () => {
  return (
		<>
			<Header />
			<TitleBanner title='আমাদের উদ্দেশ্য' />
			<AboutMain />
			<Footer />
		</>
	);
}

export default AboutUs;