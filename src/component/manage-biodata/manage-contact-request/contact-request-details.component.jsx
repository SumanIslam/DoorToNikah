import React from 'react'
import { useLocation } from 'react-router-dom';

const ContactRequestDetails = () => {
  const location = useLocation();
  const request  = location.state;
  console.log(request);
  return (
    <div>ContactRequestDetails</div>
  )
}

export default ContactRequestDetails;