import { useNavigate } from 'react-router-dom';

// mui dialogue
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Avatar from '@mui/material/Avatar';
import { blue, red } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';

// api request handler
import { httpLogOutUser } from '../../services/request';

// auth
import useAuth from '../../hooks/useAuth';

const LogoutConsent = (props) => {
	const { onClose, selectedValue, open } = props;

	const navigate = useNavigate();

	const { setAuth } = useAuth();

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClickWithLogout = (value) => {
		if (value === 'Yes') {
			setTimeout(async () => {
				await httpLogOutUser();
				// set auth empty string
				setAuth({});
				// set auth an empty object in local storage
				localStorage.setItem('auth', JSON.stringify({}))
				navigate('/');
			}, 800);
		}
		onClose(value);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Do You want to logOut?</DialogTitle>
			<List sx={{ pt: 0 }}>
				<ListItem
					button
					onClick={() => handleListItemClickWithLogout('Yes')}
					key='Yes'
				>
					<ListItemAvatar>
						<Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
							<CheckCircleIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary='Yes' />
				</ListItem>
				<ListItem
					button
					onClick={() => handleListItemClickWithLogout('No')}
					key='No'
				>
					<ListItemAvatar>
						<Avatar sx={{ backgroundColor: red[100], color: red[600] }}>
							<CancelIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary='No' />
				</ListItem>
			</List>
		</Dialog>
	);
};

LogoutConsent.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string.isRequired,
};

export default LogoutConsent;
