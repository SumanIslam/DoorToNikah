import React from "react";

// components
import BiodataSearchBox from "../biodata-search/biodata-search-box.component";

// styles
import '../../styles/utils.scss';
import './banner.style.scss'

const Banner = () => (
	<div className='banner bg-purple'>
		<div className='container'>
			<div className='row'>
				<div className='col-6 mt-5 mb-5 d-flex justify-content-center align-items-center'>
					<BiodataSearchBox />
				</div>
				<div className='col-6 mt-5 mb-5 d-flex flex-column justify-content-center align-items-center'>
					<h1 className='text-white text-center mb-4'>
						যে ব্যক্তি বিয়ে করলো সে তার অর্ধেক দ্বীন পূর্ণ করে ফেললো। বাকি
						অর্ধেকের জন্য সে আল্লাহকে ভয় করুক।
					</h1>
					<span className="hadith-reference text-white">বায়হাকী, শু’আবুল ঈমান – ৫৪৮৬</span>
				</div>
			</div>
		</div>
	</div>
);

export default Banner;