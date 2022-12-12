import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// mui icons
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';

// auth
import useAuth from '../../hooks/useAuth';
// use registration context
import useRegistration from '../../hooks/useRegistration';


// style
import './setting-main.style.scss';

const SettingMain = () => {
  const { auth } = useAuth();
  const { candidatesInfo: {candidatesName} } = useRegistration();
	const [settings, setSettings] = useState({
		email: auth?.email || '',
		wantToChangePassword: '',
		oldPassword: '',
		newPassword: '',
		confirmNewPassword: ''
	})

	const handleChange = (e) => {
		e.preventDefault();
		setSettings({...settings, [e.target.name] : e.target.value})
	}
  
  return (
		<div className='setting-main'>
			{/* nav */}
			<div>
				<ul className='item-nav'>
					<li>
						{auth?.userName ? (
							<Link
								to={`/biodatas/${(auth?.userName).replace(/ /g, '')}/profile`}
								className='profile'
							>
								<PersonIcon /> Profile
							</Link>
						) : (
							<Link
								to={`/biodatas/${(candidatesName?.name).replace(
									/ /g,
									''
								)}/profile`}
								className='profile'
							>
								<PersonIcon /> Profile
							</Link>
						)}
					</li>
					<li>
						<Link to='/forget-password' className='reset'>
							<PasswordIcon /> Forget Password
						</Link>
					</li>
				</ul>
			</div>
			<form className='setting-form'>
				<label for='email' class='form-label'>
					Account Email
				</label>
				<input
					type='email'
					class='form-control'
					id='email'
					name='email'
					value={settings.email}
					onChange={handleChange}
				/>
				<fieldset className='border pl-1 custom-input-container mt-1'>
					<legend className='float-none w-auto'>
						আপনি কি পাসওয়ার্ড পরিবর্তন করতে চান?
					</legend>
					<select name='wantToChangePassword' onChange={handleChange}>
						<option value=''>----</option>
						<option value='হ্যাঁ'>হ্যাঁ</option>
						<option value='না'>না</option>
					</select>
					<p className='guide-text'>
						পাসওায়ার্ড পরিবর্তন করতে হলে পূর্বের পাসওার্ড মনে থাকতে হবে আর যদি
						পূর্বের পাসওায়র্ড ভুলে যান তাহলে 'Forget Password' এ ক্লিক করুন
					</p>
				</fieldset>
				{settings.wantToChangePassword === 'হ্যাঁ' && (
					<>
						{/* old password */}
						<label for='oldPassword' class='form-label'>
							Old Password
						</label>
						<input
							type='password'
							class='form-control'
							id='oldPassword'
							name='oldPassword'
							value={settings.oldPassword}
							onChange={handleChange}
						/>
						{/* new password */}
						<label for='newPassword' class='form-label'>
							New Password
						</label>
						<input
							type='password'
							class='form-control'
							id='newPassword'
							name='newPassword'
							value={settings.newPassword}
							onChange={handleChange}
						/>
						<label for='confirmNewPassword' class='form-label'>
							Confirm New Password
						</label>
						<input
							type='password'
							class='form-control'
							id='confirmNewPassword'
							name='confirmNewPassword'
							value={settings.confirmNewPassword}
							onChange={handleChange}
						/>
						<button type='submit' class='btn btn-primary mb-3 mt-3'>
							Submit
						</button>
					</>
				)}
			</form>
		</div>
	);
}

export default SettingMain