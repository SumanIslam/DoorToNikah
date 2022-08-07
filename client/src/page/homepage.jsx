import React from "react";

// components
import Header from "../component/header/header.component";
import LifePartnerSelectionNasihaCard from "../component/life-partner-selection-nasiha/life-partner-selection-nasiha-card.component";
import Footer from "../component/footer/footer.component";

const Homepage = () => {
  return(
    <>
      <Header />
      <LifePartnerSelectionNasihaCard />
      <Footer />
    </>
  )
};

export default Homepage;