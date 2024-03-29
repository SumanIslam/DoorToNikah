import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// react toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { httpSignupUser } from '../../services/request';

const SignUP = () => {
	const navigate = useNavigate();
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		const userData = {
			name: data.get('name'),
			email: data.get('email'),
			password: data.get('password'),
			confirmPassword: data.get('confirmPassword'),
		};

		try {
			const user = await httpSignupUser(userData);
			toast.success(`${user.name} Your Account is Created Successfully`)
			setTimeout(() => {
				navigate('/login')
			}, 3000);
		} catch(err) {
			const errorMsg = err.response.data.msg
			toast.error(errorMsg);
		}
	};

	const theme = createTheme();
	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<ToastContainer />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign up
					</Typography>
					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin='normal'
							required
							fullWidth
							id='name'
							label='Name'
							name='name'
							type='text'
							autoComplete='name'
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							type='email'
							autoComplete='email'
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='confirmPassword'
							label='Confirm Password'
							type='password'
							id='confirmPassword'
							autoComplete='current-password'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default SignUP;