import React from 'react'
import { Link } from 'react-router-dom';

// styles
import './home-biodata-button-container.style.scss'

const BiodataButtonContainerForHomepage = () => {
  return (
		<div className='container button-container'>
			<button type='button' className='btn biodata-btn-1'>
				<Link to='/biodata/registration/step1'>
					আপনার বায়োডাটা সম্পূর্ণ করুন
				</Link>
			</button>
			<button type='button' className='btn biodata-btn-2'>
				<Link to='/tutorial'>
					যেভাবে বায়োডাটা তৈরি করবেন (ভিডিও)
				</Link>
			</button>
		</div>
	);
}

export default BiodataButtonContainerForHomepage;