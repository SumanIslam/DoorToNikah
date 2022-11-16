// mui icons
import PersonIcon from '@mui/icons-material/Person';

// api request handler
import { httpLogOutUser } from '../../hooks/request';

// styles
import './profile-dropdown.style.scss'

// auth
import useAuth from '../../hooks/useAuth';

const ProfileDropdown = () => {
	const { setAuth } = useAuth();

	const handleLogout = () => {
		setAuth('');
		httpLogOutUser();
	}
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
					<a className='dropdown-item' href='#'>
						Profile
					</a>
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
					<a className='dropdown-item' href='#' onClick={handleLogout}>
						Logout
					</a>
				</li>
			</ul>
		</div>
	);
};

export default ProfileDropdown;
