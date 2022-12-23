import { Link, useNavigate } from 'react-router-dom';

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

// assets

// auth, registration context
import useAuth from '../../hooks/useAuth';
import useRegistration from '../../hooks/useRegistration';


// styles
import './login.styles.scss';

// request
import { httpGetSingleBiodata, httpLoginUser } from '../../services/request';

// react toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const navigate = useNavigate();
	const { setAuth } = useAuth();
	const { setCandidatesInfo } = useRegistration();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const userData = {
			email: data.get('email'),
			password: data.get('password'),
		};
		try {
			const user = await httpLoginUser(userData);
			setAuth({ ...userData, ...user });
			// save auth to local storage
			localStorage.setItem(
				'auth',
				JSON.stringify({
					userId: user.userId,
					biodataId: user.biodataId,
					roles: user.roles,
					userName: user.userName,
					email: userData.email,
				})
			);

			// get biodata 
			const biodata = await httpGetSingleBiodata(user.biodataId);
			console.log(biodata);
			// set biodata to registration context
			setCandidatesInfo({ ...biodata });
			// set biodata to local storage
			localStorage.setItem('candidatesInfo', JSON.stringify(biodata));

			toast.success(
				`${
					user.userName ? user.userName : 'congratulations'
				}, You are logged in`
			);
			setTimeout(() => {
				navigate('/');
			}, 2000);
		} catch (err) {
			const errorMsg = err.response.data.msg;
			toast.error(errorMsg);
		}
	};

	const theme = createTheme();

	return (
		<div className='login'>
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
									Sign in
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
										type='email'
										id='email'
										label='Email Address'
										name='email'
										autoComplete='email'
										autoFocus
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
									<Button
										type='submit'
										fullWidth
										variant='contained'
										sx={{ mt: 3, mb: 2 }}
									>
										Sign In
									</Button>
									<Grid container>
										<Grid item xs>
											<Link to='/forget-password' className='link'>
												Forgot password?
											</Link>
										</Grid>
										<Grid item>
											<Link to='/signup' className='link'>
												Don't have an account? Sign Up
											</Link>
										</Grid>
									</Grid>
								</Box>
							</Box>
						</Container>
					</ThemeProvider>
				</div>
	);
};

export default Login;
