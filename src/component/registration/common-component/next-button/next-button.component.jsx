import React from 'react';

// mui
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import './next-button.style.scss';

const NextButton = ({ url, disabled }) => {
	return (
		<>
			{disabled ? (
				<button
					className='disabled-button'
					disabled
					title='Save the changes first'
				>
					<a href={url}>
						Next <DoubleArrowIcon />
					</a>
				</button>
			) : (
				<button className='next-button'>
					<a href={url}>
						Next <DoubleArrowIcon />
					</a>
				</button>
			)}
		</>
	);
};

export default NextButton;
