import React from 'react';
import { Link } from 'react-router-dom';

// mui
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// component
import Footer from '../component/footer/footer.component';
import Header from '../component/header/header.component';

// api
import { httpPOSTResetPassword } from '../services/request';

// react toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPasswordPage = () => {
  const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get('email');
		try {
      const user = await httpPOSTResetPassword(email);
			toast.success(user.msg);
		} catch (err) {
			const errorMsg = err.response.data.msg;
			toast.error(errorMsg);
		}
	};
  const theme = createTheme();
  return (
		<>
			<Header />
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
							Forgot Password
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
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								autoFocus
							/>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
							>
								Submit
							</Button>
							<Grid
								sx={{
									textAlign: 'right',
									mb: 2,
									mt: -1,
									textDecoration: 'underline',
								}}
							>
								<Link to='/signup'>Sign Up</Link>
							</Grid>
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
			<Footer />
		</>
	);
}

export default ForgetPasswordPage;