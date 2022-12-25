import React from "react";
import { useLocation } from "react-router-dom";

// styles
import "./contact-request-details.scss";

const ContactRequestDetails = () => {
  const location = useLocation();
  const request = location.state;
  console.log(request);

  const { NagadNumber, bkashNumber, rocketNumber } = request;

  const paymentMethod = () => {
    if (NagadNumber === "" && bkashNumber === "") {
      return "রকেট নাম্বার";
    } else if (NagadNumber === "" && rocketNumber === "") {
      return "বিকাশ নাম্বার";
    } else {
      return "নগদ নাম্বার";
    }
  };
  const paymentMethodNum = () => {
    if (NagadNumber === "" && bkashNumber === "") {
      return rocketNumber;
    } else if (NagadNumber === "" && rocketNumber === "") {
      return bkashNumber;
    } else {
      return NagadNumber;
    }
  };

  const { NagadTransactionId, bkashTransactionId, rocketTransactionId } =
    request;

  const transactionID = () => {
    if (NagadTransactionId === "" && bkashTransactionId === "") {
      return rocketTransactionId;
    } else if (NagadTransactionId === "" && rocketTransactionId === "") {
      return bkashTransactionId;
    } else {
      return NagadTransactionId;
    }
  };

  return (
    <>
      <table className="bio-info-table">
        <tr>
          <td colSpan={2} className="category-title">
            আবেদনকারীর পেমেন্ট ইনফরমেশন
          </td>
        </tr>
        <tr>
          <td>আবেদনকারীর নাম</td>
          <td>{request.userName}</td>
        </tr>
        <tr>
          <td>আবেদনকারীর ই-মেইল</td>
          <td>{request.userEmail}</td>
        </tr>
        <tr>
          <td>আবেদনকারীর মোবাইল নং</td>
          <td>{request.userMobileNumber}</td>
        </tr>
        <tr>
          <td>বায়োডাটার সংখ্যা</td>
          <td>{request.numberOfBiodata}</td>
        </tr>
        <tr>
          <td>বায়োডাটার তথ্য</td>
          <td>{request.biodatasId}</td>
        </tr>
        <tr>
          <td>টোটাল এমাউন্ট</td>
          <td>{request.totalCost}</td>
        </tr>
        <tr>
          <td>{paymentMethod()}</td>
          <td>{paymentMethodNum()}</td>
        </tr>
        <tr>
          <td>ট্রানজেকশন আইডি</td>
          <td>{transactionID()}</td>
        </tr>
      </table>
      <div className="text-center">
        <button
          type="button"
          className="btn px-4"
          style={{ backgroundColor: "#ad277c", color: "#fff" }}
        >
          Done
        </button>
      </div>
    </>
  );
};

export default ContactRequestDetails;
