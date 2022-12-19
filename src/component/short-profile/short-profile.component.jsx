import React from "react";
import { Link } from "react-router-dom";

import Male from '../../asset/Male-v2.svg'
import Female from '../../asset/Female-v2.svg'
import "./short-profile.css";

function ShortProfile({ biodata, admin }) {
    return (
			<div className='short-profile'>
				<div className='avatar'>
					<div className='short-profile-avatar'>
						{biodata?.generalInfo?.biodataType === 'পাত্রের বায়োডাটা' ? (
							<img
								className='short-profile-avatar-image'
								src={Male}
								alt='male avatar'
							/>
						) : (
							<img
								className='short-profile-avatar-image'
								src={Female}
								alt='female avatar'
							/>
						)}
					</div>
					<h4 className='shortprofile-h4tag'>
						Biodata Number
						<br />
						{biodata?.biodataId}
					</h4>
				</div>
				<div className='shortprofile-body'>
					<label className='shortprofile-body-part1'>বৈবাহিক অবস্থা</label>
					<p className='short-profile-paragraph'>
						{biodata?.generalInfo?.maritalStatus}
					</p>
					<label className='shortprofile-body-part1'>জন্মসন</label>
					<p className='short-profile-paragraph'>
						{biodata?.generalInfo?.birthYear?.option}
					</p>
					<label className='shortprofile-body-part1'>পেশা</label>
					<p className='short-profile-paragraph'>
						{biodata?.generalInfo?.occupation}
					</p>
				</div>
				<div className='short-profile-button'>
					{admin ? (
						<Link
							to={`${biodata?.biodataId}`}
							className='short-profile-btn-element'
							state={biodata}
						>
							সম্পূর্ণ বায়োডাটা
						</Link>
					) : (
						<Link
							to={`/biodatas/${biodata?.biodataId}`}
							className='short-profile-btn-element'
							state={biodata}
						>
							সম্পূর্ণ বায়োডাটা
						</Link>
					)}
				</div>
			</div>
		);

}

export default ShortProfile;