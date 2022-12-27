// style
import '../../styles/utils.scss';
import './tutorial.style.scss';



const Tutorial = () => {
    return (
			<div className='container pt-4 pb-5'>
				<div className='mlr-lg mb-5'>
					{}
					<div className='video-main-div'>
						<div className='title'>
							<h3 className='h3tag'>
								কম্পিউটার দিয়ে বায়োডাটা তৈরির ভিডিও টিউটোরিয়াল
							</h3>
						</div>
						<div className='video-div'>
							<iframe
								width='900'
								height='515'
								src='https://www.youtube.com/embed/PFIKdnC9aZk'
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen=''
							></iframe>
						</div>

						<div className='title'>
							<h3 className='h3tag'>মোবাইল দিয়ে যেভাবে বায়োডাটা তৈরি করবেন</h3>
						</div>
						<div className='video-div'>
							<iframe
								width='900'
								height='515'
								src='https://www.youtube.com/embed/-EnHPQ8tOg0'
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</div>

						{/* <div className='title'>
							<h3 className='h3tag'>
								জানুয়ারির ১, ২০২১ ওয়েবসাইট উদ্বোধনী অনুষ্ঠান
							</h3>
						</div>
						<div className='video-div'>
							<iframe
								width='900'
								height='515'
								src='https://www.youtube.com/embed/PFIKdnC9aZk'
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</div> */}
					</div>
				</div>
			</div>
		);
  }
  
  export default Tutorial;