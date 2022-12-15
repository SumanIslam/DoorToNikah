import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// mui
import {
	Container,
	Pagination
} from '@mui/material';
// component
import ShortProfile from '../short-profile/short-profile.component';
import LoadingSkeleton from '../skeleton/skeletion.component';

// biodatas context
import useBiodatas from '../../hooks/useBiodatas';

// styles
import './biodatas-showcase.style.scss';

const BiodatasShowcase = () => {
  const { page, setPage, biodatas, count, isLoading, setIsLoading } = useBiodatas();

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false)
		}, 2000);
	}, [page])

	const handleChange = (event, value) => {
		event.preventDefault();
		window.scrollTo(0, 430);
		setPage(value);
	};
  return (
		<div className='biodatas-showcase'>
			<h2 className='text-center'>বায়োডাটা সমূহ</h2>
			<div className='container'>
				<div className='showcase-short-profile'>
					{isLoading ? (
						<div className='skeleton'>
							<LoadingSkeleton />
							<LoadingSkeleton />
							<LoadingSkeleton />
							<LoadingSkeleton />
							<LoadingSkeleton />
							<LoadingSkeleton />
						</div>
					) : biodatas ? (
						biodatas?.map((biodata) => (
							<ShortProfile key={uuidv4()} biodata={biodata} />
						))
					) : (
						<div>No biodata Found</div>
					)}
				</div>
				<Container>
					<Pagination
						count={count}
						defaultPage={page}
						color='secondary'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							marginTop: '1.2rem',
						}}
						onChange={handleChange}
					/>
				</Container>
			</div>
		</div>
	);
}

export default BiodatasShowcase;