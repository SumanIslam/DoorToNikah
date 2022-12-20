import React from "react";

const Settings = () => {
  return (
    <>
      <form className="row g-3">
        <div className="col-auto">
          <label for="exampleFormControlInput1" className="visually-hidden">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
          />
        </div>
        <div className="col-auto">
          <label for="exampleFormControlInput1" className="visually-hidden">
            Role
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Role"
          />
        </div>
        <div class="col-auto">
          <button type="submit" className="btn mb-3" style={{backgroundColor: "#ad277c", color:"#fff"}}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Settings;
