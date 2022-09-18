import React from "react";
import Contact from "../component/contact/contact.component";


// component

import Footer from "../component/footer/footer.component";
import Header from "../component/header/header.component";
import TitleBanner from "../component/title-banner/title-banner.component";
const ContactPage = () => {
  return (
    <>
      <Header />
      <TitleBanner title="যে কোন তথ্য জানতে" />
      {/* <Contact></Contact> */}
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;