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
			url: '#',
		},
		{
			title: 'সাধারণ তথ্য',
			url: '#',
		},
		{
			title: 'ঠিকানা',
			url: '#',
		},
		{
			title: 'শিক্ষাগত যোগ্যতা',
			url: '#',
		},
		{
			title: 'পারিবারিক তথ্য',
			url: '#',
		},
		{
			title: 'ব্যক্তিগত তথ্য',
			url: '#',
		},
		{
			title: 'বিয়ে সংক্রান্ত তথ্য',
			url: '#',
		},
		{
			title: 'অন্যান্য তথ্য',
			url: '#',
		},
		{
			title: 'যেমন জীবনসঙ্গী আশা করেন',
			url: '#',
		},
		{
			title: 'কর্তৃপক্ষের জিজ্ঞাসা',
			url: '#',
		},
		{
			title: 'যোগাযোগ',
			url: '#',
		}
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