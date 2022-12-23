import React from "react";

const Settings = () => {
  return (
    <>
      <form className="row g-3 justify-content-center">
        <h1 className="row g-3 justify-content-center">Manage Roles</h1>
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
          <select className="form-select" aria-label="Default select example">
            <option selected>Select the role</option>
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div class="col-auto">
          <button
            type="button"
            className="btn mb-3"
            style={{ backgroundColor: "#ad277c", color: "#fff" }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Settings;
