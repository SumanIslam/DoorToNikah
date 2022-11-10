import { useContext } from 'react';
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

// auth context
import { AuthContext } from '../../context/auth.context';

// styles
import './login.styles.scss';

// request
import { httpLoginUser } from '../../hooks/request';

// react toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const navigate = useNavigate();
	const { setAuth } = useContext(AuthContext);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const userData = {
			email: data.get('email'),
			password: data.get('password'),
		};
		try {
			const user = await httpLoginUser(userData);
			const accessToken = user.accessToken;
			const roles = user.roles;
			setAuth({...userData, accessToken, roles})
			toast.success(
				`${
					user.userName ? user.userName : 'congratulations'
				}, You are logged in`
			);

			setTimeout(() => {
				navigate('/');
			}, 3000);
		} catch (err) {
			const errorMsg = err.response.data.msg;
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
						{/* <FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
							label='Remember me'
						/> */}
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
								<Link to='/' className='link'>
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
	);
};

export default Login;
