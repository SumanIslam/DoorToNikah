import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// style
import "../../styles/utils.scss";
import "./contact.scss";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0cgnk2k",
        "template_5xuy08p",
        form.current,
        "380mhN6phH5NJyJWe"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  const notify = () =>
    toast.success("Message has been sent. We will contact to you shortly.");

  return (
    <div className="container pt-4 pb-5">
      <div className="mlr-lg mb-5">
        <div>
          <div className="contact_paragraph">
            <p>
              আপনার যে কোন জিজ্ঞাসা নিম্নোক্ত ফর্মে পূরণ করে আমাদের কাছে পাঠিয়ে
              দিন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো ইন শা আল্লাহ।
            </p>
          </div>
          <div className="contact-form-div">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <h6>নাম</h6>
              <input
                type="text"
                name="user_name"
                className="input-field"
                placeholder=""
              />

              <h6>ইমেইল</h6>
              <input
                type="email"
                name="user_email"
                className="input-field"
                placeholder=""
              />

              <h6>বিষয়</h6>
              <input
                type="text"
                name="user_subject"
                className="input-field"
                placeholder=""
              />

              <h6>আপনার বার্তা</h6>
              <textarea
                name="message"
                className="input-field textarea"
                placeholder=""
              ></textarea>
              <button
                type="submit"
                value="Send"
                className="contact-button"
                onClick={notify}
              >
                পাঠান
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;