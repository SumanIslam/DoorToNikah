// mui icons
import PersonIcon from '@mui/icons-material/Person';

// styles
import '../../styles/utils.scss';
import './profile-dropdown.style.scss'

const ProfileDropdown = () => {
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
					<a className='dropdown-item' href='#'>
						Logout
					</a>
				</li>
			</ul>
		</div>
	);
};

export default ProfileDropdown;
