import React from "react";

// data
import { termsWithBullet }  from '../terms-main-data'

const BulletText = () => {
  return (
		<div>
			{termsWithBullet.map((data) => (
				<div key={data.id}>
					<h3 className='mt-4'>{data.title}</h3>
					<ul>
						{data.list.map((item) => (
							<li key={item.id}>{item.text}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default BulletText;