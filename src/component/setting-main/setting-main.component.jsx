import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// mui icons
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';

// auth
import useAuth from '../../hooks/useAuth';
// use registration context
import useRegistration from '../../hooks/useRegistration';

// api
import { httpPOSTChangePassword } from '../../services/request';

// react toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userData = {
			email: settings.email,
			oldPassword: settings.oldPassword,
			newPassword: settings.newPassword,
			confirmNewPassword: settings.confirmNewPassword
		}

		console.log(userData);
		
		try {
      const user = await httpPOSTChangePassword(userData);
			toast.success(user.msg);
		} catch (err) {
			const errorMsg = err.response.data.msg;
			toast.error(errorMsg);
		}
	}
  
  return (
		<div className='setting-main'>
			<ToastContainer />
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
			<form className='setting-form' onSubmit={handleSubmit}>
				<label htmlFor='email' className='form-label'>
					Account Email
				</label>
				<input
					type='email'
					className='form-control'
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
						পাসওায়ার্ড পরিবর্তন করতে হলে পূর্বের পাসওায়ার্ড মনে থাকতে হবে আর যদি
						পূর্বের পাসওায়ার্ড ভুলে যান তাহলে 'Forget Password' এ ক্লিক করুন
					</p>
				</fieldset>
				{settings.wantToChangePassword === 'হ্যাঁ' && (
					<>
						{/* old password */}
						<label htmlFor='oldPassword' className='form-label'>
							Old Password
						</label>
						<input
							type='password'
							className='form-control'
							id='oldPassword'
							name='oldPassword'
							value={settings.oldPassword}
							onChange={handleChange}
						/>
						{/* new password */}
						<label htmlFor='newPassword' className='form-label'>
							New Password
						</label>
						<input
							type='password'
							className='form-control'
							id='newPassword'
							name='newPassword'
							value={settings.newPassword}
							onChange={handleChange}
						/>
						<label htmlFor='confirmNewPassword' className='form-label'>
							Confirm New Password
						</label>
						<input
							type='password'
							className='form-control'
							id='confirmNewPassword'
							name='confirmNewPassword'
							value={settings.confirmNewPassword}
							onChange={handleChange}
						/>
						<button type='submit' className='btn btn-primary mb-3 mt-3'>
							Submit
						</button>
					</>
				)}
			</form>
		</div>
	);
}

export default SettingMain