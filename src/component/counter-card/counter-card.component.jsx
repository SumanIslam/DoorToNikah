import { useEffect, useState } from 'react'
// images
import Male from '../../asset/Male-v2.svg'
import Female from '../../asset/Female-v2.svg'
import Couple from '../../asset/Couple-v2.svg'
import Ring from '../../asset/Ring.svg'

// styles
import '../../styles/utils.scss';
import './counter-card.style.scss';

// api
import { httpGETBiodataCount } from '../../services/request';

const CounterCard = () => {
	const [counts, setCounts] = useState({});

	useEffect(() => {
		async function getCounts() {
			const res = await httpGETBiodataCount();
			setCounts(res)
		}
		getCounts();
	}, [])
	
  return (
		<div className='container'>
			<div className='main-div'>
				<div className='card-div'>
					<img src={Couple} alt='couple' className='image-control' />
					<h1 className='number' data-target='5000'>
						{counts.totalBiodataCount}
						<span className='Add'>+</span>
					</h1>
					<p className='card-title'>মোট দ্বীনদার পাত্র-পাত্রীর</p>
					<p className='card-title'>বায়োডাটা</p>
				</div>
				<div className='card-div'>
					<img src={Male} alt='male' className='image-control' />
					<h1 className='number' data-target='1000'>
						{counts.totalMaleBiodataCount}
						<span className='Add'>+</span>
					</h1>
					<p className='card-title'>মোট পাত্রের</p>
					<p className='card-title'>বায়োডাটা</p>
				</div>
				<div className='card-div'>
					<img src={Female} alt='' className='image-control' />
					<h1 className='number' data-target='7000'>
						{counts.totalFemaleBiodataCount}
						<span className='Add'>+</span>
					</h1>
					<p className='card-title'>মোট পাত্রীর</p>
					<p className='card-title'>বায়োডাটা</p>
				</div>
				<div className='card-div'>
					<img src={Ring} alt='' className='image-control' />
					<h1 className='number' data-target='950'>
						0<span className='Add'>+</span>
					</h1>
					<p className='card-title'>সর্বমোট সফল</p>
					<p className='card-title'>বিবাহ</p>
				</div>
			</div>
		</div>
	);
}

export default CounterCard;