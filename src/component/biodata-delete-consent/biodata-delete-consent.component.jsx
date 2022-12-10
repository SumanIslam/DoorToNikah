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
import { httpDeleteBiodata } from '../../services/request';

// registration context
import useRegistration from '../../hooks/useRegistration';

// auth context
import useAuth from '../../hooks/useAuth';

const BiodataDeleteConsent = (props) => {
	const { onClose, selectedValue, open } = props;

	const navigate = useNavigate();

	const { candidatesInfo, setCandidatesInfo } = useRegistration();
	const {
		auth: { biodataId },
	} = useAuth();

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick2 = (value) => {
		if (value === 'Yes') {
			setTimeout(async () => {
				navigate('/biodata/registration/step1');
				await httpDeleteBiodata(biodataId);
			}, 800);
			
			// empty registration context
			setCandidatesInfo({});

			// empty candidates info
			localStorage.setItem('candidatesInfo', JSON.stringify({}));
		}
		onClose(value);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Do You want to Delete/Hide your Biodata?</DialogTitle>
			<List sx={{ pt: 0 }}>
				<ListItem button onClick={() => handleListItemClick2('Yes')} key='Yes'>
					<ListItemAvatar>
						<Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
							<CheckCircleIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary='Yes' />
				</ListItem>
				<ListItem button onClick={() => handleListItemClick2('No')} key='No'>
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

export default BiodataDeleteConsent;

BiodataDeleteConsent.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string.isRequired,
};