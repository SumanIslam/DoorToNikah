import React from 'react'
import { v4 as uuidv4 } from 'uuid';

// component
import FormContainerButton from '../form-container-button/form-container-button.component';

// styles
import './form-container-button-nav.style.scss'

const FormContainerButtonNav = ({ current }) => {
  const titleArray = [
		{
			title: 'নাম',
			url: '/biodata/registration/step1',
		},
		{
			title: 'সাধারণ তথ্য',
			url: '/biodata/registration/step2',
		},
		{
			title: 'ঠিকানা',
			url: '/biodata/registration/step3',
		},
		{
			title: 'শিক্ষাগত যোগ্যতা',
			url: '/biodata/registration/step4',
		},
		{
			title: 'পারিবারিক তথ্য',
			url: '/biodata/registration/step5',
		},
		{
			title: 'ব্যক্তিগত তথ্য',
			url: '/biodata/registration/step6',
		},
		{
			title: 'বিয়ে সংক্রান্ত তথ্য',
			url: '/biodata/registration/step7',
		},
		{
			title: 'অন্যান্য তথ্য',
			url: '/biodata/registration/step8',
		},
		{
			title: 'যেমন জীবনসঙ্গী আশা করেন',
			url: '/biodata/registration/step9',
		},
		{
			title: 'কর্তৃপক্ষের জিজ্ঞাসা',
			url: '/biodata/registration/step10',
		},
		{
			title: 'যোগাযোগ',
			url: '/biodata/registration/step11',
		},
	];
  return (
		<div className='button-nav-container'>
			<ul className='button-nav'>
				{titleArray.map((item, index) => (
					<FormContainerButton
						title={item.title}
						url={item.url}
						current={index + 1 === current}
						key={uuidv4()}
					/>
				))}
			</ul>
		</div>
	);
}

export default FormContainerButtonNav;