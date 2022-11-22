import React from 'react'

// mui icons
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';

// styles
import './form-container-nav.style.scss'

const FormContainerNav = () => {
  return (
		<ul className='item-nav'>
			<li>
				<a href='#' className='view'>
					<VisibilityIcon /> View
				</a>
			</li>
			<li>
				<a href='#' className='biodata-approve'>
					বায়োডাটা এপ্রুভ না হওয়ার কারণগুলো জেনে নিন
				</a>
			</li>
			<li>
				<a href='#' className='edit'>
					<CreateIcon /> Edit
				</a>
			</li>
		</ul>
	);
}

export default FormContainerNav;