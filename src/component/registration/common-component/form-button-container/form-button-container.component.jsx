import { Link } from 'react-router-dom';

// mui
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

// styles
import '../../../../styles/utils.scss';
import './form-button-container.style.scss';

const FormButtonContainer = ({ nextUrl, backUrl, loading, saved }) => {

  return (
		<div className='d-flex justify-content-between width'>
			{loading ? (
				<button className='small-button' type='button'>
					<span
						className='spinner-border spinner-border-sm'
						role='status'
						aria-hidden='true'
					></span>{' '}
					saving...
				</button>
			) : (
				<button type='submit' className='small-button'>
					Save Changes
				</button>
			)}
			<div>
				{backUrl && (
					<Link to={backUrl}>
						<button className='next-button'>
							<KeyboardDoubleArrowLeftIcon /> Back
						</button>
					</Link>
				)}
				{nextUrl && saved && (
					<Link to={nextUrl}>
						<button className='next-button'>
							Next <DoubleArrowIcon />
						</button>
					</Link>
				)}
			</div>
		</div>
	);
}

export default FormButtonContainer;