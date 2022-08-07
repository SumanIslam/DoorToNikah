import React from "react";

// styles
import './footer.style.scss';

const Footer = () => {
  return (
		<div className='bg-purple' id='footer'>
			<div className='container pt-5'>
				<hr />
				<div className='d-flex justify-content-evenly'>
					<p>কপিরাইট ©2022 doortonikah.com। সর্বস্বত্ব সংরক্ষিত।</p>
					<div className='mt-3'>
						<a href='/privacy&policy' className='mr-3 text-light'>
							প্রাইভেসি পলিসি
						</a>
						<a href='#' className='text-light'>
							শর্তাবলি
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;