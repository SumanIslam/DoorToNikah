import React from 'react'
// mui
import {
	Skeleton,
} from '@mui/material';

const LoadingSkeleton = () => {
  return (
		<div style={{margin: '1rem'}}>
			<Skeleton
				variant='rectangular'
				width={300}
				height={190}
				sx={{ marginBottom: '0.5rem' }}
			/>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '0.4rem',
				}}
			>
				<Skeleton width='43%' sx={{ marginRight: '1rem' }} />
				<Skeleton width='43%' />
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '0.4rem',
				}}
			>
				<Skeleton width='43%' sx={{ marginRight: '1rem' }} />
				<Skeleton width='43%' />
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '0.4rem',
				}}
			>
				<Skeleton width='43%' sx={{ marginRight: '1rem' }} />
				<Skeleton width='43%' />
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '1rem',
				}}
			>
				<Skeleton
					variant='rectangular'
					width={180}
					height={40}
					sx={{ marginRight: '1rem' }}
				/>
			</div>
		</div>
	);
}

export default LoadingSkeleton