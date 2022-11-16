// styles
import '../../styles/utils.scss';
import './counter-card.style.scss';

const CounterCard = () => {
  return (
		<div className='container'>
			<div className='main-div'>
				<div className='card-div'>
					<img
						src='./images/couple_icon.jpg'
						alt=''
						className='image-control'
					/>
					<h1 className='number' data-target='5000'>
						5000<span className='Add'>+</span>
					</h1>
					<p className='card-title'>মোট দ্বীনদার পাত্র-পাত্রীর</p>
					<p className='card-title'>বায়োডাটা</p>
				</div>
				<div className='card-div'>
					<img src='./images/man_icon.jpg' alt='' className='image-control' />
					<h1 className='number' data-target='1000'>
						1000<span className='Add'>+</span>
					</h1>
					<p className='card-title'>মোট পাত্রের</p>
					<p className='card-title'>বায়োডাটা</p>
				</div>
				<div className='card-div'>
					<img
						src='./images/woman1_icon.jpg'
						alt=''
						className='image-control'
					/>
					<h1 className='number' data-target='7000'>
						7000<span className='Add'>+</span>
					</h1>
					<p className='card-title'>মোট পাত্রীর</p>
					<p className='card-title'>বায়োডাটা</p>
				</div>
				<div className='card-div'>
					<img
						src='./images/couple_ring_icon.jpg'
						alt=''
						className='image-control'
					/>
					<h1 className='number' data-target='950'>
						950<span className='Add'>+</span>
					</h1>
					<p className='card-title'>সর্বমোট সফল</p>
					<p className='card-title'>বিবাহ</p>
				</div>
			</div>
		</div>
	);
}

export default CounterCard;