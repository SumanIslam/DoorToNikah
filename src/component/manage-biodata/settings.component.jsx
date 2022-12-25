import { useState } from "react";

// api
import { httpPOSTAdminPrivilege } from '../../services/request'

// react toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
  const [adminPrivilegeDetails, setAdminPrivilegeDetails] = useState({
    email: '',
    role: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await httpPOSTAdminPrivilege(adminPrivilegeDetails)
      toast.success('Admin Privilege has been set successfully')
    } catch(err) {
      console.log(err)
      const errMsg = err.response.data.msg;
      toast.error(errMsg);
    }
  }

  const handleChange = (e) => {
    e.preventDefault();

    setAdminPrivilegeDetails({...adminPrivilegeDetails, [e.target.name]: e.target.value})
  }
  // console.log(adminPrivilegeDetails);

  return (
    <>
      <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
        <ToastContainer />
        <h1 className="row g-3 justify-content-center">Manage Roles</h1>
        <div className="col-auto">
          <label htmlFor="exampleFormControlInput1" className="visually-hidden">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            name="email"
            required={true}
            value={adminPrivilegeDetails.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="col-auto">
          <select className="form-select" aria-label="Default select example" onChange={handleChange} name='role' defaultValue={adminPrivilegeDetails.role} required>
            <option value=''>Select the role</option>
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="col-auto">
          <button
            type="submit"
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
