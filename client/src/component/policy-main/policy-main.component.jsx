import React, { useState, useEffect } from "react";

// data
import { policyData } from "./policiy-main-data";

// styles
import '../../styles/utils.scss'

const PolicyMain = () => {
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
			<hr />
			<div className={`${marginLeftRight} mb-5`}>
				<p>
					OrdhekDeen.com is a matrimonial site focused on Islamic Sharia. Our
					main goal is to find a suitable life partner to live according to the
					Islamic way of life. Your privacy is significant to us. So it is
					essential to be transparent about how we collect, use and share
					information about you. This privacy policy is mentioned to help you
					understand
				</p>
				<ul>
					{policyData.map((data) => (
						<li className='mb-4'>{data.text}</li>
					))}
				</ul>
				<h2 className='mt-5'>Notice</h2>
				<p>
					We may change this Privacy Policy from time to time based on your
					choices or the policy of our company. If you have any questions
					regarding our Privacy Policy, please write to{' '}
					<a href="/contact" className="text-purple fw-bold">doortonikah.com/contact</a>.
				</p>
			</div>
			<hr />
		</div>
	);
}

export default PolicyMain;