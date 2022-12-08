import React from "react";
import Tutorial from "../component/tutorial/tutorial.component";

// component
import Header from "../component/header/header.component";
import Footer  from '../component/footer/footer.component';
import ShortProfile from "../component/short-profile-component/short-profile.component";


const TutorialPage = () => {
  return (
		<>
			<Header />
            < Tutorial />
			<ShortProfile />
			<Footer />
			
		</>
	);
}

export default TutorialPage;
