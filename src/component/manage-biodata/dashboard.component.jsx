import { useState, useEffect } from 'react'

// mui
import { Box, Typography } from '@mui/material';

// mui icons
import TodayIcon from '@mui/icons-material/Today';
import DateRangeIcon from '@mui/icons-material/DateRange';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import WcIcon from '@mui/icons-material/Wc';
import ManIcon from '@mui/icons-material/Man';
import Woman2Icon from '@mui/icons-material/Woman2';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import {
	httpGETBiodataCount,
	httpGETUsersCount,
} from '../../services/request';

const DashBoard = () => {
	const [fetchBool, setFetchBool] = useState(false);
	setTimeout(() => {
		setFetchBool(true)
	}, 100);
  const [counts, setCounts] = useState({});

  useEffect(() => {
		const getCounts = async () => {
			const biodataCount = await httpGETBiodataCount();
			const totalUsersCount = await httpGETUsersCount();

			setCounts({
				biodataCount,
				totalUsersCount,
			});
		};

		getCounts();
	}, [fetchBool]);
  return (
		<>
			{/* 1st row */}
			<div className='d-flex justify-content-center align-items-center flex-wrap'>
				{/* biodatas in a week */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>New Biodatas</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.biodataCount?.totalBiodataUploadedThisWeekCount}
						</Typography>
						<Typography sx={{ color: '#dccbcb' }}>(This Week)</Typography>
					</Box>
					<TodayIcon />
				</Box>

				{/* biodatas within 15 days */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>New Biodatas</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.biodataCount?.totalBiodataUploadedIn15DaysCount}
						</Typography>
						<Typography sx={{ color: '#dccbcb' }}>(Last 15 days)</Typography>
					</Box>
					<DateRangeIcon />
				</Box>

				{/* biodatas within month */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>New Biodatas</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.biodataCount?.totalBiodataUploadedInaMonthCount}
						</Typography>
						<Typography sx={{ color: '#dccbcb' }}>(This Month)</Typography>
					</Box>
					<InsertInvitationIcon />
				</Box>

				{/* biodatas within year */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>New Biodatas</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.biodataCount?.totalBiodataUploadedInaYearCount}
						</Typography>
						<Typography sx={{ color: '#dccbcb' }}>(This Year)</Typography>
					</Box>
					<CalendarMonthIcon />
				</Box>
				{/* total biodatas */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>Total Biodatas</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.biodataCount?.totalBiodataCount}
						</Typography>
					</Box>
					<WcIcon sx={{ fontSize: '2.5rem' }} />
				</Box>

				{/* total male biodatas */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>
							Total Male Biodatas
						</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.biodataCount?.totalMaleBiodataCount}
						</Typography>
					</Box>
					<ManIcon sx={{ fontSize: '2.5rem' }} />
				</Box>

				{/* female biodatas */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>
							Total Female Biodatas
						</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.biodataCount?.totalFemaleBiodataCount}
						</Typography>
					</Box>
					<Woman2Icon sx={{ fontSize: '2.5rem' }} />
				</Box>

				{/* total users */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>Total Users</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.totalUsersCount}
						</Typography>
					</Box>
					<PersonIcon sx={{ fontSize: '2.5rem' }} />
				</Box>

				{/* total unmarried biodata */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>
							Total Unmarried Biodata
						</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.biodataCount?.totalUnmarriedBiodataCount}
						</Typography>
					</Box>
					<PeopleAltIcon sx={{ fontSize: '2.5rem' }} />
				</Box>

				{/* total married biodata */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>
							Total Married Biodata
						</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.biodataCount?.totalMarriedBiodataCount}
						</Typography>
					</Box>
					<PeopleAltIcon sx={{ fontSize: '2.5rem' }} />
				</Box>

				{/* total divorced biodata */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>
							Total Divorced Biodata
						</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.biodataCount?.totalDivorcedBiodataCount}
						</Typography>
					</Box>
					<PeopleAltIcon sx={{ fontSize: '2.5rem' }} />
				</Box>

				{/* total widow biodata */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>
							Total Widow Biodata
						</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.biodataCount?.totalWidowBiodataCount}
						</Typography>
					</Box>
					<PeopleAltIcon sx={{ fontSize: '2.5rem' }} />
				</Box>

				{/* total widower biodata */}
				<Box
					sx={{
						width: 300,
						height: 150,
						backgroundColor: '#522b79',
						color: '#fff',
						margin: '1rem',
						padding: '0 0.7rem',
						display: 'flex',
						borderRadius: '5px',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						'&:hover': {
							backgroundColor: '#522b79',
						},
					}}
				>
					<Box
						sx={{
							padding: '0 1rem',
						}}
					>
						<Typography sx={{ color: '#dccbcb' }}>
							Total Widower Biodata
						</Typography>
						<Typography
							sx={{ fontSize: '1.5rem', margin: '0.2rem 0', color: '#c64d99' }}
						>
							{counts?.biodataCount?.totalWidowerBiodataCount}
						</Typography>
					</Box>
					<PeopleAltIcon sx={{ fontSize: '2.5rem' }} />
				</Box>
			</div>
		</>
	);
}

export default DashBoard