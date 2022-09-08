import React from "react";
import { Link } from 'react-router-dom'

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
						<Link to='/privacy&policy' className='mr-3 text-light'>
							প্রাইভেসি পলিসি
						</Link>
						<Link to='/terms' className='text-light'>
							শর্তাবলি
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;