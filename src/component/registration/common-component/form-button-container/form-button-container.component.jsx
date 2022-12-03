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
			) : saved ? (
				<button className='small-button'>Saved</button>
			) : (
				//  onClick={handleClick}
				<button type='submit' className='small-button'>
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
				{nextUrl && saved && (
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