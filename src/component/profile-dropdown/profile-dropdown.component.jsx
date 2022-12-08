import { useState } from 'react';
import { Link } from 'react-router-dom';
// mui icons
import PersonIcon from '@mui/icons-material/Person';

// styles
import './profile-dropdown.style.scss';

// component
import LogoutConsent from '../logout-consent/logout-consent.component';

// auth context
import useAuth from '../../hooks/useAuth';

const ProfileDropdown = () => {
	const { auth } = useAuth();
	const { candidatesName } =JSON.parse(localStorage.getItem('candidatesInfo'))
	const [open, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState('No');

	const handleClose = (value) => {
		console.log(value);
		setOpen(false);
		setSelectedValue(value);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};
	
	return (
		<div className='dropdown space'>
			<button
				className='btn dropdown-style dropdown-toggle'
				type='button'
				data-bs-toggle='dropdown'
				aria-expanded='false'
			>
				<PersonIcon />
			</button>
			<ul className='dropdown-menu'>
				<li>
					{auth?.userName ? (
						<Link className='dropdown-item' to={`${auth?.userName}/profile`}>
							Profile
						</Link>
					) : (
						<Link className='dropdown-item' to={`${candidatesName?.name}/profile`}>
							Profile
						</Link>
					)}

					{/* <a href='#'></a> */}
				</li>
				<li>
					<a className='dropdown-item' href='#'>
						Edit Biodata
					</a>
				</li>
				<li>
					<a className='dropdown-item' href='#'>
						Delete / Hide Biodata
					</a>
				</li>
				<li>
					<a className='dropdown-item' href='#' onClick={handleClickOpen}>
						Logout
					</a>
				</li>
				<LogoutConsent
					selectedValue={selectedValue}
					open={open}
					onClose={handleClose}
				/>
			</ul>
		</div>
	);
};

export default ProfileDropdown;
