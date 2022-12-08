import React from "react";
import "./short-profile.css";

function ShortProfile(){
    return <div className="main-search">
                <div className="avatar">
                    <a className="short-profile-avatar" href="">
                        <img className="short-profile-avatar-image" src="https://ordhekdeen.com/wp-content/uploads/2022/02/Female-v2.svg" alt="" />
                    </a>
                    <h4 className="shortprofile-h4tag">
                        Biodata Number
                        <br />
                        91543
                    </h4>
                </div>
                <div className="shortprofile-body">
                    <label className="shortprofile-body-part1">বৈবাহিক অবস্থা</label> 
                    <p className="short-profile-paragraph">অবিবাহিত</p>
                    <label className="shortprofile-body-part1">জন্মস্থান</label> 
                    <p className="short-profile-paragraph">১৯৯৮</p>
                    <label className="shortprofile-body-part1">পেশা</label> 
                    <p className="short-profile-paragraph">ছাত্রী</p>
                </div>
                <div className="short-profile-button">
                    <a className="short-profile-btn-element" href="">সম্পূর্ণ বায়োডাটা</a>
                </div>
                

    </div>

}

export default ShortProfile;