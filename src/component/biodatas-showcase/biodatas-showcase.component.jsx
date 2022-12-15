import {v4 as uuidv4} from 'uuid'

// mui
import { Container } from '@mui/material';
import Pagination from '@mui/material/Pagination';

// component
import ShortProfile from '../short-profile/short-profile.component';

// biodatas context
import useBiodatas from '../../hooks/useBiodatas'

// styles
import './biodatas-showcase.style.scss';

const BiodatasShowcase = () => {
  const { page, setPage, biodatas, count } = useBiodatas();
	console.log(biodatas);
  return (
		<div className='biodatas-showcase'>
			<h2 className='text-center'>বায়োডাটা সমূহ</h2>
			<div className='container'>
				<div className='showcase-short-profile'>
					{biodatas ? (
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
						onChange={(event, value) => setPage(value)}
					/>
				</Container>
			</div>
		</div>
	);
}

export default BiodatasShowcase;