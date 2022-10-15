import React from "react";

// components
import Header from "../component/header/header.component";
import LifePartnerSelectionNasihaCard from "../component/life-partner-selection-nasiha/life-partner-selection-nasiha-card.component";
import Footer from "../component/footer/footer.component";
import Banner from "../component/banner/banner.component";
import BiodataButtonContainerForHomepage from "../component/home-biodata-button-container/home-biodata-button-container.component";

const Homepage = () => {
  return(
    <>
      <Header />
      <Banner />
      <BiodataButtonContainerForHomepage />
      <LifePartnerSelectionNasihaCard />
      <Footer />
    </>
  )
};

export default Homepage;