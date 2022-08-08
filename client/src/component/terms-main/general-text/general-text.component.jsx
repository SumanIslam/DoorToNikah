import React from 'react';
import { generalText } from '../terms-main-data';

const GeneralText = () => {
  return (
		<div>
			{generalText.map((data) => (
				<p key={data.id}>{data.text}</p>
			))}
		</div>
	);
}

export default GeneralText;