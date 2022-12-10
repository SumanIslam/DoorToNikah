import { useState } from 'react';

// import image
import female from '../../../../asset/Female-v2.svg';
import male from '../../../../asset/Male-v2.svg';

// styles
import '../../../../styles/utils.scss';
import './bio-profile-container.css';

// copy to clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';

// component
import BiodataNoContainer from '../biodata-no-container/biodata-no-container.component';

const BioProfileContainer = ({ biodataId, generalInfo, noHide }) => {
  const [copied, setCopied] = useState(false); 

  const handleCopy = () => {
		setCopied(true);
	};

  return (
		<>
			{generalInfo ? (
				<div className={`profile-container ${noHide ? '' : 'dis-none'}`}>
					<div className='image-div'>
						<div>
							{generalInfo?.biodataType === 'পাত্রীর বায়োডাটা' ? (
								<img src={female} alt='biodata-type' />
							) : (
								<img src={male} alt='biodata-type' />
							)}
						</div>
						<div className='bio-no-div'>
							<p>Biodata No: {biodataId}</p>
						</div>
					</div>

					<table className='table-div'>
						<dl className='dl-horizontal'>
							<dt className='dt-div'>বায়োডাটার ধরন</dt>
							<dd className='dd-div'>
								<p>{generalInfo.biodataType}</p>
							</dd>
							<dt className='dt-div'>বৈবাহিক অবস্থা</dt>
							<dd className='dd-div'>
								<p>{generalInfo.maritalStatus}</p>
							</dd>
							<dt className='dt-div'>স্থায়ী ঠিকানা (বিভাগ)</dt>
							<dd className='dd-div'>
								<p>{generalInfo.permanentDivision}</p>
							</dd>
							<dt className='dt-div'>স্থায়ী ঠিকানা (জেলা)</dt>
							<dd className='dd-div'>
								<p>{generalInfo.permanentDistrict}</p>
							</dd>
							<dt className='dt-div'>বর্তমান ঠিকানা (বিভাগ)</dt>
							<dd className='dd-div'>
								<p>{generalInfo.presentDivision}</p>
							</dd>
							<dt className='dt-div'>বর্তমান ঠিকানা (জেলা)</dt>
							<dd className='dd-div'>
								<p>{generalInfo.presentDistrict}</p>
							</dd>
							<dt className='dt-div'>জন্মসন (আসল)</dt>
							<dd className='dd-div'>
								<p>{generalInfo.birthYear.option}</p>
							</dd>
							<dt className='dt-div'>গাত্রবর্ণ</dt>
							<dd className='dd-div'>
								<p>{generalInfo.skinColor}</p>
							</dd>
							<dt className='dt-div'>উচ্চতা</dt>
							<dd className='dd-div'>
								<p>{generalInfo.height}</p>
							</dd>
							<dt className='dt-div'>ওজন</dt>
							<dd className='dd-div'>
								<p>{generalInfo.weight}</p>
							</dd>
							<dt className='dt-div'>রক্তের গ্রুপ</dt>
							<dd className='dd-div'>
								<p>{generalInfo.bloodGroup}</p>
							</dd>
							<dt className='dt-div'>পেশা</dt>
							<dd className='dd-div'>
								<p>{generalInfo.occupation}</p>
							</dd>
							{generalInfo.monthlyIncome && (
								<>
									<dt className='dt-div'>মাসিক আয়</dt>
									<dd className='dd-div'>
										<p>{generalInfo.monthlyIncome}</p>
									</dd>
								</>
							)}
						</dl>
					</table>
					<div className='copy-to-clipboard'>
						{copied ? (
							<div className='btn btn-light'>কপি সম্পন্ন হয়েছে</div>
						) : (
							<CopyToClipboard text={biodataId} onCopy={() => handleCopy()}>
								<div className='btn btn-light'>বায়োডাটার লিংক কপি করুন</div>
							</CopyToClipboard>
						)}
					</div>
				</div>
			) : (
				<BiodataNoContainer />
			)}
		</>
	);
}
  

export default BioProfileContainer;