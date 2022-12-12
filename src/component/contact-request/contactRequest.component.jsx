import React from "react";

// style
import "../../styles/utils.scss";
import "./contactRequest.scss";

const ContactRequestComponent = () => {
  const [counter, setCounter] = React.useState(100);
  const handleOnChange = (e) => {
    setCounter(e.target.value);
  };

  return (
    <div className="container pt-4 pb-5">
      <div className="mlr-lg mb-5">
        <div>
          <div className="contact_paragraph">
            <p>
              বায়োডাটার অভিভাবকের মোবাইল নাম্বার পেতে নির্ধারিত টাকা পরিশোধ করতে
              হবে। অনুগ্রহ পূর্বক ফর্মটি পূরণের মাধ্যমে আপনার আবেদন সম্পন্ন
              করুন। আবেদন সম্পন্ন হলে সর্বোচ্চ ২ কর্ম দিবসের মধ্যে যোগাযোগ তথ্য
              আপনার প্রদত্ত <strong> মোবাইল নাম্বারে SMS এর মাধ্যমে </strong>{" "}
              পাঠিয়ে দেয়া হবে ইন শা আল্লাহ।
            </p>
          </div>
          <div className="container button-container">
            <button type="button" className="btn biodata-btn-2">
              <a
                href="https://www.youtube.com/watch?v=ZP0RbKk2v-E&feature=youtu.be"
                target="blank"
              >
                যেভাবে আবেদন করবেন (ভিডিও)
              </a>
            </button>
          </div>
          <div className="contact-form-div">
            <form className="contact-form">
              <h6>আপনার নাম</h6>
              <input
                type="text"
                name="user_name"
                className="input-field"
                placeholder=""
              />

              <h6>আপনার ই-মেইল</h6>
              <input
                type="email"
                name="user_email"
                className="input-field"
                placeholder=""
              />

              <h6>মোবাইল নাম্বার</h6>
              <input
                type="text"
                name="user_subject"
                className="input-field"
                placeholder=""
              />
              <h4>কত সংখ্যক বায়োডাটার যোগাযোগের তথ্য চাচ্ছেন?</h4>

              <div className="row">
                <div class="col-sm-6">
                  <div className="card">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">বায়োডাটার সংখ্যা</li>
                      <select
                        className="form-select d-flex justify-content-center bg-color"
                        aria-label="Default select example"
                        onChange={handleOnChange}
                      >
                        <option selected value="1">
                          ১
                        </option>
                        <option value="2">২</option>
                        <option value="3">৩</option>
                        <option value="4">৪</option>
                        <option value="5">৫</option>
                      </select>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">সর্বমোট মূল্য</li>
                      <li className="list-group-item d-flex justify-content-center bg-color">
                        {counter == 1
                          ? "১০০"
                          : counter == 2
                          ? "১৮০"
                          : counter == 3
                          ? "২৩০"
                          : counter == 4
                          ? "২৭০"
                          : counter == 5
                          ? "৩০০"
                          : 0} টাকা
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h6>
                Biodata No (যার সাথে যোগাযোগ করতে চাচ্ছেন। একাধিক হলে কমা দিয়ে
                লিখুন।)
              </h6>
              <input
                type="text"
                name="user_subject"
                className="input-field"
                placeholder="000, 000, 000..."
              />
              <h4>যেকোন একটি মাধ্যমে পেমেন্ট করুন</h4>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Bkash
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        নিম্ন উল্লিখিত Bkash (Personal) নাম্বারে{" "}
                        <span className="bg-color">
                          {counter == 1
                            ? "১০০"
                            : counter == 2
                            ? "১৮০"
                            : counter == 3
                            ? "২৩০"
                            : counter == 4
                            ? "২৭০"
                            : counter == 5
                            ? "৩০০"
                            : 0}{" "}
                          টাকা Send Money{" "}
                        </span>{" "}
                        করুন।
                      </p>
                      <p>Bkash Personal Number : 01774944111</p>
                      <div class="input-group input-group-sm mb-3">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-sm"
                        >
                          Your Bkash Number
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                        ></input>
                      </div>
                      <div class="input-group input-group-sm mb-3">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-sm"
                        >
                          Transaction ID
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Rocket
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        নিম্ন উল্লিখিত Rocket (Personal) নাম্বারে{" "}
                        <span className="bg-color">
                          {counter == 1
                            ? "১০০"
                            : counter == 2
                            ? "১৮০"
                            : counter == 3
                            ? "২৩০"
                            : counter == 4
                            ? "২৭০"
                            : counter == 5
                            ? "৩০০"
                            : 0}{" "}
                          টাকা Send Money{" "}
                        </span>{" "}
                        করুন।
                      </p>
                      <p>Rocket Personal Number : 01774944111</p>
                      <div class="input-group input-group-sm mb-3">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-sm"
                        >
                          Your Rocket Number
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                        ></input>
                      </div>
                      <div class="input-group input-group-sm mb-3">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-sm"
                        >
                          Transaction ID
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Nagad
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        নিম্ন উল্লিখিত Nagad (Personal) নাম্বারে{" "}
                        <span className="bg-color">
                          {counter == 1
                            ? "১০০"
                            : counter == 2
                            ? "১৮০"
                            : counter == 3
                            ? "২৩০"
                            : counter == 4
                            ? "২৭০"
                            : counter == 5
                            ? "৩০০"
                            : 0}{" "}
                          টাকা Send Money{" "}
                        </span>{" "}
                        করুন।
                      </p>
                      <p>Nagad Personal Number : 01774944111</p>
                      <div class="input-group input-group-sm mb-3">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-sm"
                        >
                          Your Nagad Number
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                        ></input>
                      </div>
                      <div class="input-group input-group-sm mb-3">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-sm"
                        >
                          Transaction ID
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" value="Send" className="contact-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactRequestComponent;
