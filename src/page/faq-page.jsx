import React from "react";

// component
import FaqComponent from "../component/faq/faq.component";
import Footer from "../component/footer/footer.component";
import Header from "../component/header/header.component";
import TitleBanner from "../component/title-banner/title-banner.component";

const FaqPage = () => {
  return (
    <>
      <Header />
      <TitleBanner title="প্রশ্ন ও উত্তর" />
      <FaqComponent />
      <Footer />
    </>
  );
};

export default FaqPage;
