import React, { useEffect, useState } from 'react';

// data
import { termsWithTitle } from './terms-main-data';

// component
import GeneralText from './general-text/general-text.component';
import BulletText from './bullet-text/bullet-text.component';

const TermsMain = () => {
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setInnerWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);
	}, []);

	const marginLeftRight = innerWidth > 1206 ? 'mlr-10' : 'mlr-0';
	return (
		<div className='container pt-4 pb-5'>
			<hr />
			<div className={`${marginLeftRight} mb-5`}>
				<GeneralText />
				{termsWithTitle
					.filter((item) => item.id <= 4)
					.map((data) => (
						<div key={data.id}>
							<h3 className='mt-4'>{data.title}</h3>
							<p>{data.text}</p>
						</div>
					))}
				<BulletText />
				{termsWithTitle
					.filter((item) => item.id > 4)
					.map((data) => (
						<div key={data.id}>
							<h3 className='mt-4'>{data.title}</h3>
							<p>{data.text}</p>
						</div>
					))}
			</div>
			<hr />
		</div>
	);
};

export default TermsMain;