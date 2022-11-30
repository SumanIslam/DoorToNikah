import React from "react";
import { Link } from "react-router-dom";

// styles
import '../../styles/utils.scss';
import './header.style.scss';

// components
import ProfileDropdown from "../profile-dropdown/profile-dropdown.component";

// auth context
import useAuth from '../../hooks/useAuth';

const Header = () => {
	const { auth }  = useAuth();
	const userId = auth?.userId;

  return (
		// white background navbar
		<nav className='navbar navbar-expand-lg bg-white'>
			<div className='container container-fluid text'>
				{/* navbar logo */}
				<Link
					className='navbar-brand fs-2 fw-bold purple-color mr-lg'
					to='/'
				>
					<span className='pink-color cinzel-font'>DoorTo</span>Nikah
				</Link>
				{/* navbar toggler */}
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				{/* navbar list */}
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item fw-semibold'>
							<Link
								className='nav-link purple-color'
								aria-current='page'
								to='/'
							>
								হোম
							</Link>
						</li>
						<li className='nav-item fw-semibold'>
							<Link className='nav-link purple-color' to='/about'>
								আমাদের সম্পর্কে
							</Link>
						</li>
						<li className='nav-item fw-semibold'>
							<Link className='nav-link purple-color' to='/faq'>
								প্রশ্ন ও উত্তর
							</Link>
						</li>
						<li className='nav-item fw-semibold'>
							<Link className='nav-link purple-color' to='/tutorial'>
								টিউটোরিয়াল
							</Link>
						</li>
						<li className='nav-item fw-semibold'>
							<Link className='nav-link purple-color' to='/contact'>
								যোগাযোগ
							</Link>
						</li>
					</ul>
					{userId ? (
						<ProfileDropdown className='space' />
					) : (
						<Link className='nav-link purple-color' to='/login'>
							<li className='btn btn-pink space'>লগইন</li>
						</Link>
					)}
					<Link
						className='nav-link purple-color'
						to='/biodata/registration/step1'
					>
						<li className='btn btn-purple space'>ফ্রি রেজিষ্ট্রেশন</li>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
