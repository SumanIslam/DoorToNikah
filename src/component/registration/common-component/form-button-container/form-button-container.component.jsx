import { useState } from 'react';
import { Link } from 'react-router-dom';
// registration context
import useRegistration from '../../../../hooks/useRegistration';

// mui
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

// styles
import './form-button-container.style.scss';
import '../../../../styles/utils.scss'

const FormButtonContainer = ({ states, nextUrl, backUrl, validated, handleError, objectKey }) => {
	console.log(objectKey);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const { candidatesInfo, setCandidatesInfo } = useRegistration();

  // console.log(states);
  console.log(candidatesInfo);
	const handleClick = (e) => {
		e.preventDefault();

		if(validated) {
			setLoading(true);
			setCandidatesInfo({...candidatesInfo, [objectKey]: {...states}})
			setTimeout(() => {
				setLoading(false);
				setSaved(true);
			}, 2000);
		} else {
			handleError('Please fill out all the required field');
		}

		
	}
  return (
		<div className='d-flex justify-content-between width'>
			{loading ? (
				<button className='small-button' type='button' disabled>
					<span
						className='spinner-border spinner-border-sm'
						role='status'
						aria-hidden='true'
					></span>{' '}
					saving...
				</button>
			) : saved ? (
				<button className='small-button'>Saved</button>
			) : (
				<button className='small-button' onClick={handleClick}>
					Save Changes
				</button>
			)}
			<div>
				{backUrl && (
					<button className='next-button'>
						<Link to={backUrl}>
							<KeyboardDoubleArrowLeftIcon /> Back
						</Link>
					</button>
				)}
				{!saved ? (
					<button
						className='disabled-button'
						disabled
						title='Save the changes first'
					>
						<Link to={nextUrl}>
							Next <DoubleArrowIcon />
						</Link>
					</button>
				) : (
					<button className='next-button'>
						<Link to={nextUrl}>
							Next <DoubleArrowIcon />
						</Link>
					</button>
				)}
			</div>
		</div>
	);
}

export default FormButtonContainer;