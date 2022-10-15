import React from "react";

// styles
import './title-banner.style.scss';
import '../../styles/utils.scss';

const TitleBanner = ({title}) => {
  return(
    <div className="title-banner bg-purple d-flex justify-content-center align-items-center">
      {title}
    </div>
  )
}

export default TitleBanner;