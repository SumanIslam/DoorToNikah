// data
import { termsWithTitle } from './terms-main-data';

// component
import GeneralText from './general-text/general-text.component';
import BulletText from './bullet-text/bullet-text.component';

// styles
import './terms-main.style.scss'

const TermsMain = () => {
	return (
		<div className='container pt-4 pb-5'>
			<hr />
			<div className='mlr-lg mb-5'>
				<GeneralText />
				{termsWithTitle
					.filter((item) => item.id <= 4)
					.map((data) => (
						<div key={data.id}>
							<h3 className='mt-4'>{data.title}</h3>
							<p>{data.text}</p>
						</div>
					))}
				<BulletText />
				{termsWithTitle
					.filter((item) => item.id > 4)
					.map((data) => (
						<div key={data.id}>
							<h3 className='mt-4'>{data.title}</h3>
							<p>{data.text}</p>
						</div>
					))}
			</div>
			<hr />
		</div>
	);
};

export default TermsMain;