import React from "react";
import ContactRequestComponent from "../component/contact-request/contactRequest.component";

// component

import Footer from "../component/footer/footer.component";
import Header from "../component/header/header.component";
import TitleBanner from "../component/title-banner/title-banner.component";

const ContactRequest = () => {
  return (
    <>
      <Header />
      <TitleBanner title="যোগাযোগ তথ্যের আবেদন" />
      {/* <Contact></Contact> */}
      <ContactRequestComponent />
      <Footer />
    </>
  );
};

export default ContactRequest;
