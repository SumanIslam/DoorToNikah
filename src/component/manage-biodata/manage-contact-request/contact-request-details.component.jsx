import React from "react";
import { useLocation } from "react-router-dom";

// styles
import './contact-request-details.scss'

const ContactRequestDetails = () => {
  const location = useLocation();
  const request = location.state;
  console.log(request);

  const {NagadNumber, bkashNumber, rocketNumber} = request;
  
  const paymentMethod = () =>{
    if (NagadNumber === "" && bkashNumber === ""){
      return "রকেট নাম্বারঃ " + rocketNumber;
    }
    else if (NagadNumber === "" && rocketNumber === ""){
      return "বিকাশ নাম্বারঃ " + bkashNumber;
    }
    else {
      return "নগদ নাম্বারঃ " + NagadNumber;
    }
  }

  const {NagadTransactionId, bkashTransactionId, rocketTransactionId} = request;

  const transactionID = () =>{
    if (NagadTransactionId === "" && bkashTransactionId === ""){
      return rocketTransactionId;
    }
    else if (NagadTransactionId === "" && rocketTransactionId === ""){
      return bkashTransactionId;
    }
    else {
      return NagadTransactionId;
    }
  }

  return (
    <div className="card" style={{fontFamily: 'SolaimanLipi'}}>
      <div className="card-header text-center">আবেদনকারীর পেমেন্ট ইনফরমেশন</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">আবেদনকারীর নামঃ {request.userName}</li>
        <li className="list-group-item">
          আবেদনকারীর ই-মেইলঃ {request.userEmail}
        </li>
        <li className="list-group-item">
          আবেদনকারীর মোবাইল নংঃ {request.userMobileNumber}
        </li>
        <li className="list-group-item">
          বায়োডাটার সংখ্যাঃ {request.numberOfBiodata}
        </li>
        <li className="list-group-item">
          বায়োডাটার তথ্যঃ {request.biodatasId}
        </li>
        <li className="list-group-item">টোটাল এমাউন্টঃ {request.totalCost}</li>
        <li className="list-group-item"> {paymentMethod()}
        </li>
        <li className="list-group-item">
          ট্রানজেকশন আইডিঃ {transactionID()}
        </li>
      </ul>
      <button type="button" className="btn done-button">Done</button>
    </div>
  );
};

export default ContactRequestDetails;
