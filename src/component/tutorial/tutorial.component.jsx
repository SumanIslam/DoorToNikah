import React, { useEffect, useState } from "react";
// style
import '../../styles/utils.scss';
import './tutorial.css';



const Tutorial = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      function handleResize() {
        setInnerWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
    }, []);
  
    const marginLeftRight = innerWidth > 1206 ? 'mlr-7' : 'mlr-0';
  
    return (
			<div className='container pt-4 pb-5'>
				{/* <hr className="top-line" /> */}
				<div className={`${marginLeftRight} mb-5`}>
					{}
					<div className='video-main-div'>
						<div>
							<h3 className='h3tag'>
								মোবাইল দিয়ে বায়োডাটা তৈরির ভিডিও টিউটোরিয়াল
							</h3>
						</div>
						<div className='video-div'>
							<iframe
								width='900'
								height='515'
								src='https://www.youtube.com/embed/hVU2h69ksXo'
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</div>

						<div>
							<h3 className='h3tag'>
								কম্পিউটার দিয়ে যেভাবে বায়োডাটা তৈরি করবেন
							</h3>
						</div>
						<div className='video-div'>
							<iframe
								width='900'
								height='515'
								src='https://www.youtube.com/embed/HJFxTsX0Ok0'
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</div>

						<div>
							<h3 className='h3tag'>
								জানুয়ারির ১, ২০২১ ওয়েবসাইট উদ্বোধনী অনুষ্ঠান
							</h3>
						</div>
						<div className='video-div'>
							<iframe
								width='900'
								height='515'
								src='https://www.youtube.com/embed/BdGB6op867Q'
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
				{/* <hr/> */}
			</div>
		);
  }
  
  export default Tutorial;