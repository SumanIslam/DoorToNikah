import { useState } from 'react';
import { Link } from 'react-router-dom';
// mui icons
import PersonIcon from '@mui/icons-material/Person';

// styles
import './profile-dropdown.style.scss';

// component
import LogoutConsent from '../logout-consent/logout-consent.component';
import BiodataDeleteConsent from '../biodata-delete-consent/biodata-delete-consent.component';

// auth context
import useAuth from '../../hooks/useAuth';

const ProfileDropdown = () => {
	const { auth } = useAuth();
	const { candidatesName } =JSON.parse(localStorage.getItem('candidatesInfo')) || 
	''
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [selectedValue, setSelectedValue] = useState('No');
	const [selectedValue2, setSelectedValue2] = useState('No');

	const handleClose = (value) => {
		setOpen(false);
		setSelectedValue(value);
	};
	const handleClose2 = (value) => {
		console.log(value);
		setOpen2(false);
		setSelectedValue2(value);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClickOpen2 = () => {
		setOpen2(true);
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
						<Link
							className='dropdown-item'
							to={`/biodatas/${(auth?.userName).replace(/ /g, '')}/settings`}
						>
							Settings
						</Link>
					) : (
						<Link
							className='dropdown-item'
							to={`/biodatas/${(candidatesName?.name).replace(
								/ /g,
								''
							)}/settings`}
						>
							Settings
						</Link>
					)}
				</li>
				<li>
					{auth?.userName ? (
						<Link
							className='dropdown-item'
							to={`/biodatas/${(auth?.userName).replace(/ /g, '')}/profile`}
						>
							My Profile
						</Link>
					) : (
						<Link
							className='dropdown-item'
							to={`/biodatas/${(candidatesName?.name).replace(
								/ /g,
								''
							)}/profile`}
						>
							My Profile
						</Link>
					)}
				</li>
				<li>
					<Link className='dropdown-item' to='/biodata/registration/step1'>
						Edit Biodata
					</Link>
				</li>
				<li>
					<button className='dropdown-item' onClick={handleClickOpen2}>
						Delete / Hide Biodata
					</button>
				</li>
				<li>
					<button className='dropdown-item' onClick={handleClickOpen}>
						Logout
					</button>
				</li>
				{auth?.roles?.Admin === 5056 && (
					<li>
						<Link className='dropdown-item' to='/adminPanel/dashboard'>
							Admin Dashboard
						</Link>
					</li>
				)}
				<LogoutConsent
					selectedValue={selectedValue}
					open={open}
					onClose={handleClose}
				/>
				<BiodataDeleteConsent
					selectedValue={selectedValue2}
					open={open2}
					onClose={handleClose2}
				/>
			</ul>
		</div>
	);
};

export default ProfileDropdown;
