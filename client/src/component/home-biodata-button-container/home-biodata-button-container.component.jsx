import React from 'react'

// styles
import './home-biodata-button-container.style.scss'

const BiodataButtonContainerForHomepage = () => {
  return (
		<div className='container button-container'>
			<button type='button' class='btn biodata-btn-1'>
				আপনার বায়োডাটা সম্পূর্ণ করুন
			</button>
			<button type='button' class='btn biodata-btn-2'>
				যেভাবে বায়োডাটা তৈরি করবেন (ভিডিও)
			</button>
		</div>
	);
}

export default BiodataButtonContainerForHomepage;