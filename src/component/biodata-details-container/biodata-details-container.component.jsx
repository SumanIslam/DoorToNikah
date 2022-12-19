import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// styles
import './biodata-details-container.style.scss';

// api
import {
	httpPOSTAcceptedBiodata,
	httpDeleteBiodata,
} from '../../services/request';

// react toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BiodataDetailsContainer({ biodataDetails, admin }) {
	const {
		candidatesName,
		generalInfo,
		address,
		educationalQualification,
		familyInfo,
		personalInfo,
		marriageInfo,
		otherInfo,
		partnersCharacteristics,
		authoritysAsk,
		contactInfo,
	} = biodataDetails;

	const navigate = useNavigate();

	// handle accept
	const handleAccept = async (e) => {
		e.preventDefault();
		const biodata = {...biodataDetails, isApproved: true}

		try {
			await httpPOSTAcceptedBiodata(biodata)
			toast.success('Biodata is Accepted')
			setTimeout(() => {
				navigate('/adminPanel/manageBiodatas');
			}, 1500);
		} catch(err) {
			const errorMsg = err.response.data.msg;
			console.log(errorMsg);
			toast.error(errorMsg)
		}
	}

	// handle reject
	const handleReject = async (e) => {
		e.preventDefault();

		try {
			toast.success('Biodata is Deleted Succssfully');

			setTimeout(async () => {
				navigate('/adminPanel/manageBiodatas');
				await httpDeleteBiodata(biodataDetails.biodataId);
			}, 1500);
		} catch(err) {
			const errorMsg = err.response.data.msg;
			console.log(errorMsg);
			toast.error(errorMsg);
		}
	}

	return (
		<div className={`${admin ? 'admin-biodata-details-container' : 'biodata-details-container'}`}>
			<ToastContainer />
			{/* full info */}
			<div>
				{/* candidates Name section */}
				{admin && candidatesName && (
					<table className='biodata-details-table'>
						<tr>
							<td colSpan={2} className='category-title'>
								নাম
							</td>
						</tr>
						<tr>
							<td>নাম</td>
							<td>{candidatesName?.name}</td>
						</tr>
					</table>
				)}

				{/* address section */}
				{address && (
					<table className='biodata-details-table'>
						<tr>
							<td colSpan={2} className='category-title'>
								ঠিকানা
							</td>
						</tr>
						<tr>
							<td>স্থায়ী ঠিকানা</td>
							<td>{address?.permanentAddress}</td>
						</tr>
						<tr>
							<td>বর্তমান ঠিকানা</td>
							<td>{address?.presentAddress}</td>
						</tr>
						<tr>
							<td>কোথায় বড় হয়েছেন?</td>
							<td>{address?.broughtUpPlace}</td>
						</tr>
					</table>
				)}

				{/* educational qualification section */}
				{educationalQualification && (
					<table className='biodata-details-table'>
						<tr>
							<td colSpan={2} className='category-title'>
								শিক্ষাগত যোগ্যতা
							</td>
						</tr>
						<tr>
							<td>কোন মাধ্যমে পড়াশোনা করেছেন?</td>
							<td>{educationalQualification?.mediumOfStudy}</td>
						</tr>
						{educationalQualification?.mediumOfStudy === 'জেনারেল' && (
							<>
								<tr>
									<td>মাধ্যমিক (SSC) / সমমান পাশ করেছেন?</td>
									<td>{educationalQualification?.sscOrEquivalentStudy}</td>
								</tr>
								{educationalQualification?.sscOrEquivalentStudy === 'হ্যাঁ' && (
									<>
										<tr>
											<td>মাধ্যমিক (SSC) / সমমান ফলাফল</td>
											<td>{educationalQualification?.sscOrEquivalentResult}</td>
										</tr>
										<tr>
											<td>মাধ্যমিক (SSC) / সমমান বিভাগ</td>
											<td>
												{educationalQualification?.sscOrEquivalentDivision}
											</td>
										</tr>
										<tr>
											<td>মাধ্যমিক (SSC) / সমমান পাসের সন</td>
											<td>
												{educationalQualification?.sscOrEquivalentPassingYear}
											</td>
										</tr>
										<tr>
											<td>উচ্চ মাধ্যমিক (HSC) / সমমান পাশ করেছেন?</td>
											<td>{educationalQualification?.hscOrEquivalentStudy}</td>
										</tr>
										{educationalQualification?.hscOrEquivalentStudy ===
											'হ্যাঁ' && (
											<>
												<tr>
													<td>উচ্চ মাধ্যমিক (HSC) / সমমান ফলাফল</td>
													<td>
														{educationalQualification?.hscOrEquivalentResult}
													</td>
												</tr>
												<tr>
													<td>উচ্চ মাধ্যমিক (HSC) / সমমান বিভাগ</td>
													<td>
														{educationalQualification?.hscOrEquivalentDivision}
													</td>
												</tr>
												<tr>
													<td>উচ্চ মাধ্যমিক (HSC) / সমমান পাসের সন</td>
													<td>
														{
															educationalQualification?.hscOrEquivalentPassingYear
														}
													</td>
												</tr>
												{educationalQualification?.honsOrEquivalentStudy !==
													'' && (
													<>
														<tr>
															<td>
																স্নাতক / স্নাতক (সম্মান) / সমমান শিক্ষাগত
																যোগ্যতা
															</td>
															<td>
																{
																	educationalQualification?.honsOrEquivalentStudy
																}
															</td>
														</tr>
														<tr>
															<td>শিক্ষাপ্রতিষ্ঠানের নাম</td>
															<td>
																{educationalQualification?.honsInstituteName}
															</td>
														</tr>
														<tr>
															<td>পাসের সন</td>
															<td>
																{educationalQualification?.honsPassingYear}
															</td>
														</tr>
													</>
												)}
											</>
										)}
										{educationalQualification?.hscOrEquivalentStudy ===
											'না' && (
											<tr>
												<td>উচ্চ মাধ্যমিক (HSC) / সমমান কোন বর্ষে পড়ছেন?</td>
												<td>{educationalQualification?.hscSession}</td>
											</tr>
										)}
										{educationalQualification?.hscOrEquivalentStudy ===
											'ডিপ্লোমা পড়েছি"' && (
											<>
												<tr>
													<td>ডিপ্লোমা কোন বিষয়ে পড়েছেন?</td>
													<td>{educationalQualification?.diplomaSubject}</td>
												</tr>
												<tr>
													<td>শিক্ষাপ্রতিষ্ঠানের নাম</td>
													<td>
														{educationalQualification?.diplomaInstituteName}
													</td>
												</tr>
												<tr>
													<td>পাশের সন</td>
													<td>
														{educationalQualification?.diplomaPassingYear}
													</td>
												</tr>
											</>
										)}
									</>
								)}
								{educationalQualification?.sscOrEquivalentStudy === 'না' && (
									<tr>
										<td>কোন ক্লাস পর্যন্ত পড়েছেন</td>
										<td>{educationalQualification?.highestClass}</td>
									</tr>
								)}
							</>
						)}
						{educationalQualification?.mediumOfStudy === 'মাদ্রাসা' && (
							<>
								<tr>
									<td>আপনি কি হাফেজ?</td>
									<td>{educationalQualification?.isHafez}</td>
								</tr>
								<tr>
									<td>দাওরায়ে হাদীস পাশ করেছেন?</td>
									<td>{educationalQualification?.passDaorayeHadis}</td>
								</tr>
								{educationalQualification?.passDaorayeHadis === 'হ্যাঁ' && (
									<>
										<tr>
											<td>দাওরায়ে হাদীস পাসের সন</td>
											<td>
												{educationalQualification?.DaorayeHadisPassingYear}
											</td>
										</tr>
										<tr>
											<td>দাওরায়ে হাদীসের নতিজা কি?</td>
											<td>{educationalQualification?.DaorayeHadisResult}</td>
										</tr>
										<tr>
											<td>আপনি কি তাখাস্সুস পড়েছেন?</td>
											<td>{educationalQualification?.studyTakhassos}</td>
										</tr>
										{educationalQualification?.studyTakhassos === 'হ্যাঁ' && (
											<>
												<tr>
													<td>কোন বিষয়ে তাখাস্সুস পড়েছেন?</td>
													<td>{educationalQualification?.takhassosSubject}</td>
												</tr>
												<tr>
													<td>তাখাস্সুস পাসের সন</td>
													<td>
														{educationalQualification?.takhassosPassingYear}
													</td>
												</tr>
											</>
										)}
									</>
								)}
								{educationalQualification?.passDaorayeHadis ===
									'না, এখনো পড়ছি' && (
									<tr>
										<td>দাওরায়ে হাদীস কোন বর্ষে পড়ছেন?</td>
										<td>{educationalQualification?.daorayeHadisYear}</td>
									</tr>
								)}
							</>
						)}
						{educationalQualification?.otherEducationalInfo && (
							<tr>
								<td>অন্যান্য শিক্ষাগত যোগ্যতা</td>
								<td>{educationalQualification?.otherEducationalInfo}</td>
							</tr>
						)}
					</table>
				)}

				{/* family info */}
				{familyInfo && (
					<table className='biodata-details-table'>
						<tr>
							<td colSpan={2} className='category-title'>
								পারিবারিক তথ্য
							</td>
						</tr>
						<tr>
							<td>পিতার নাম</td>
							<td>{familyInfo?.fathersName}</td>
						</tr>
						<tr>
							<td>মাতার নাম</td>
							<td>{familyInfo?.mothersName}</td>
						</tr>
						<tr>
							<td>পিতার পেশা</td>
							<td>{familyInfo?.fathersOccupation}</td>
						</tr>
						<tr>
							<td>মাতার পেশা</td>
							<td>{familyInfo?.mothersOccupation}</td>
						</tr>
						<tr>
							<td>বোন কয়জন?</td>
							<td>{familyInfo?.numberOfSisters}</td>
						</tr>
						<tr>
							<td>ভাই কয়জন?</td>
							<td>{familyInfo?.numberOfBrothers}</td>
						</tr>
						{familyInfo?.numberOfSisters !== '' &&
							familyInfo?.numberOfSisters !== 'বোন নেই' && (
								<tr>
									<td>বোনদের সম্পর্কে তথ্য</td>
									<td>{familyInfo?.sistersInfo}</td>
								</tr>
							)}
						{familyInfo?.numberOfSisters !== '' &&
							familyInfo?.numberOfSisters !== 'ভাই নেই' && (
								<tr>
									<td>ভাইদের সম্পর্কে তথ্য</td>
									<td>{familyInfo?.brothersInfo}</td>
								</tr>
							)}
						{familyInfo?.unclesOccupation !== '' && (
							<tr>
								<td>চাচা মামাদের পেশা</td>
								<td>{familyInfo?.unclesOccupation}</td>
							</tr>
						)}

						<tr>
							<td>পরিবারের অর্থনৈতিক ও সামাজিক অবস্থা</td>
							<td>{familyInfo?.financialAndSocialCondition}</td>
						</tr>
					</table>
				)}

				{/* personal info */}
				{personalInfo && (
					<table className='biodata-details-table'>
						<tr>
							<td colSpan={2} className='category-title'>
								ব্যক্তিগত তথ্য
							</td>
						</tr>
						{generalInfo?.biodataType === 'পাত্রের বায়োডাটা' && (
							<>
								<tr>
									<td>সুন্নতি দাঁড়ি রয়েছে কি?</td>
									<td>{personalInfo?.haveSunnatiBeard}</td>
								</tr>
								<tr>
									<td>পায়ের টাখনুর উপরে কাপড় পরেন?</td>
									<td>{personalInfo?.clothesOverAnkle}</td>
								</tr>
								<tr>
									<td>ঘরের বাহিরে সাধারণত কী ধরণের পোশাক পরেন?</td>
									<td>{personalInfo?.outdoorClothes}</td>
								</tr>
							</>
						)}
						{generalInfo?.biodataType === 'পাত্রীর বায়োডাটা' && (
							<tr>
								<td>ঘরের বাহিরে সাধারণত কী ধরণের পোশাক পরেন? (পর্দার বিবরণ)</td>
								<td>{personalInfo?.outdoorClothes}</td>
							</tr>
						)}
						<tr>
							<td>প্রতিদিন পাঁচ ওয়াক্ত নামাজ পড়া হয়?</td>
							<td>{personalInfo?.dailyPrayer}</td>
						</tr>
						<tr>
							<td>নিয়মিত নামায কত সময় যাবত পড়ছেন?</td>
							<td>{personalInfo?.prayingSince}</td>
						</tr>
						<tr>
							<td>মাহরাম/নন-মাহরাম মেনে চলেন কি?</td>
							<td>{personalInfo?.MaintainMahram}</td>
						</tr>
						<tr>
							<td>শুদ্ধভাবে কুরআন তিলওয়াত করতে পারেন?</td>
							<td>{personalInfo?.QuranRecitation}</td>
						</tr>
						<tr>
							<td>কোন মাঝহাব অনুসরণ করেন?</td>
							<td>{personalInfo?.majhab}</td>
						</tr>
						<tr>
							<td>কোনো রাজনৈতিক দর্শন থাকলে লিখুন</td>
							<td>{personalInfo?.politicalViews}</td>
						</tr>
						<tr>
							<td>নাটক/সিনেমা/সিরিয়াল/গান এসব দেখেন বা শুনেন?</td>
							<td>{personalInfo?.watchFilm}</td>
						</tr>
						<tr>
							<td>মানসিক বা শারীরিক কোনো রোগ আছে কি?</td>
							<td>{personalInfo?.mentalOrPhysicalProblem}</td>
						</tr>
						<tr>
							<td>দ্বীনের কোন বিশেষ মেহনতে যুক্ত আছেন?</td>
							<td>{personalInfo?.deeniMehnot}</td>
						</tr>
						<tr>
							<td>আপনি কি কোনো পীরের মুরিদ বা অনুসারী?</td>
							<td>{personalInfo?.pirMuridan}</td>
						</tr>
						<tr>
							<td>মাজার সম্পর্কে আপনার ধারণা বা বিশ্বাস কি?</td>
							<td>{personalInfo?.beliefsAboutMazar}</td>
						</tr>
						<tr>
							<td>আপনার পছন্দের অন্তত ৩ টি ইসলামী বই এর নাম লিখুন</td>
							<td>{personalInfo?.favoriteIslamicBooks}</td>
						</tr>
						<tr>
							<td>আপনার পছন্দের অন্তত ৩ জন আলেমের নাম লিখুন</td>
							<td>{personalInfo?.favoriteIslamicScholar}</td>
						</tr>
						{personalInfo?.specialSkills && (
							<tr>
								<td>বিশেষ দ্বীনি বা দুনিয়াবি যোগ্যতা (যদি থাকে)</td>
								<td>{personalInfo?.specialSkills}</td>
							</tr>
						)}
						<tr>
							<td>নিজের সম্পর্কে কিছু লিখুন</td>
							<td>{personalInfo?.aboutYourself}</td>
						</tr>
					</table>
				)}

				{/* marriage info */}
				{marriageInfo && (
					<table className='biodata-details-table'>
						<tr>
							<td colSpan={2} className='category-title'>
								বিয়ে সংক্রান্ত তথ্য
							</td>
						</tr>
						{generalInfo?.biodataType === 'পাত্রের বায়োডাটা' &&
							generalInfo?.maritalStatus === 'বিবাহিত' && (
								<tr>
									<td>বিবাহিত অবস্থায় আবার কেন বিয়ে করতে চাচ্ছেন?</td>
									<td>{marriageInfo?.reasonOfMarriageAgain}</td>
								</tr>
							)}
						{generalInfo?.maritalStatus === 'ডিভোর্সড' && (
							<tr>
								<td>আপনার ডিভোর্সের সময়কাল ও কারণ</td>
								<td>{marriageInfo?.reasonOfDivorce}</td>
							</tr>
						)}
						{generalInfo?.biodataType === 'পাত্রের বায়োডাটা' &&
							generalInfo?.maritalStatus === 'বিপত্নীক' && (
								<tr>
									<td>আপনার স্ত্রী কবে, কিভাবে মারা গিয়েছিল?</td>
									<td>{marriageInfo?.wifesDeathInfo}</td>
								</tr>
							)}
						{generalInfo?.biodataType === 'পাত্রীর বায়োডাটা' &&
							generalInfo?.maritalStatus === 'বিধবা' && (
								<tr>
									<td>আপনার স্বামী কবে, কিভাবে মারা গিয়েছিল?</td>
									<td>{marriageInfo?.husbandsDeathInfo}</td>
								</tr>
							)}
						<tr>
							<td>অভিভাবক আপনার বিয়েতে রাজি কি না?</td>
							<td>{marriageInfo?.parentsConsent}</td>
						</tr>
						<tr>
							<td>বিয়ে কেন করছেন? বিয়ে সম্পর্কে আপনার ধারণা কি?</td>
							<td>{marriageInfo?.reasonOfMarriage}</td>
						</tr>
						{generalInfo?.biodataType === 'পাত্রের বায়োডাটা' && (
							<>
								<tr>
									<td>বিয়ের পর স্ত্রীর পর্দার ব্যবস্থা রাখতে পারবেন?</td>
									<td>{marriageInfo?.manageWifesParda}</td>
								</tr>
								<tr>
									<td>বিয়ের পর স্ত্রীকে চাকরী করতে দিতে চান?</td>
									<td>{marriageInfo?.allowWifesJob}</td>
								</tr>
								<tr>
									<td>বিয়ের পর স্ত্রীকে কোথায় নিয়ে থাকবেন?</td>
									<td>{marriageInfo?.placeToLiveWithWife}</td>
								</tr>
								<tr>
									<td>
										বিয়ে উপলক্ষে আপনি বা আপনার পরিবার পাত্রীপক্ষের কাছে যৌতুক বা
										উপহার বা অর্থ আশা করবেন কি না?
									</td>
									<td>{marriageInfo?.expectDowry}</td>
								</tr>
							</>
						)}

						{generalInfo?.biodataType === 'পাত্রীর বায়োডাটা' && (
							<>
								<tr>
									<td>আপনি কি বিয়ের পর চাকরি করতে ইচ্ছুক?</td>
									<td>{marriageInfo?.wantToDoJobAfterMarriage}</td>
								</tr>
								<tr>
									<td>বিয়ের পর পড়াশোনা চালিয়ে যেতে চান? (ছাত্রী হলে)?</td>
									<td>{marriageInfo?.wantToStudyAfterMarriage}</td>
								</tr>
							</>
						)}
					</table>
				)}

				{/* other Info */}
				{otherInfo && (
					<table className='biodata-details-table'>
						<tr>
							<td colSpan={2} className='category-title'>
								অন্যান্য তথ্য
							</td>
						</tr>
						{otherInfo?.termsToInclude && (
							<tr>
								<td>বিশেষ কিছু যদি জানাতে চান</td>
								<td>{otherInfo?.termsToInclude}</td>
							</tr>
						)}
						{otherInfo?.occupationInfo && (
							<tr>
								<td>পেশা সম্পর্কিত তথ্য</td>
								<td>{otherInfo?.occupationInfo}</td>
							</tr>
						)}
					</table>
				)}

				{/* partners characteristics */}
				{partnersCharacteristics && (
					<table className='biodata-details-table'>
						<tr>
							<td colSpan={2} className='category-title'>
								যেমন জীবনসঙ্গী আশা করেন
							</td>
						</tr>
						<tr>
							<td>বয়স</td>
							<td>{partnersCharacteristics?.partnersAge}</td>
						</tr>
						<tr>
							<td>গাত্রবর্ণ</td>
							<td>{partnersCharacteristics?.partnersSkinColor}</td>
						</tr>
						<tr>
							<td>নূন্যতম উচ্চতা</td>
							<td>{partnersCharacteristics?.partnersMinimumHeight}</td>
						</tr>
						<tr>
							<td>নূন্যতম শিক্ষাগত যোগ্যতা</td>
							<td>
								{
									partnersCharacteristics?.partnersMinimumEducationalQualification
								}
							</td>
						</tr>
						<tr>
							<td>জেলা</td>
							<td>{partnersCharacteristics?.partnersDistrict}</td>
						</tr>
						<tr>
							<td>বৈবাহিক অবস্থা</td>
							<td>{partnersCharacteristics?.partnersMaritalStatus}</td>
						</tr>
						<tr>
							<td>পেশা</td>
							<td>{partnersCharacteristics?.partnersOccupation}</td>
						</tr>
						<tr>
							<td>অর্থনৈতিক অবস্থা</td>
							<td>{partnersCharacteristics?.partnersFinancialCondition}</td>
						</tr>
						<tr>
							<td>পারিবারিক অবস্থা</td>
							<td>{partnersCharacteristics?.partnersFamilyCondition}</td>
						</tr>
						<tr>
							<td>জীবনসঙ্গীর যে বৈশিষ্ট্য বা গুণাবলী আশা করেন</td>
							<td>
								{partnersCharacteristics?.partnersDesirableCharacteristics}
							</td>
						</tr>
					</table>
				)}

				{/* authoritys ask */}
				{authoritysAsk && (
					<table className='biodata-details-table'>
						<tr>
							<td colSpan={2} className='category-title'>
								কর্তৃপক্ষের জিজ্ঞাসা
							</td>
						</tr>
						<tr>
							<td>
								OrdhekDeen.com ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন তা অভিভাবক জানেন?
							</td>
							<td>{authoritysAsk?.parentsConsentAboutBiodata}</td>
						</tr>
						<tr>
							<td>
								আল্লাহ'র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিচ্ছেন সব সত্য?
							</td>
							<td>{authoritysAsk?.isGivenInfoLegitimate}</td>
						</tr>
						<tr>
							<td>
								কোনো মিথ্যা তথ্য দিয়ে থাকলে তার দুনিয়াবী ও আখিরাতের দায়ভার
								ওয়েবসাইট কর্তৃপক্ষ নিবে না। আপনি কি রাজি?
							</td>
							<td>{authoritysAsk?.takeResponsibilityOfFalseInfo}</td>
						</tr>
					</table>
				)}

				{/* contact info */}
				{admin && contactInfo && (
					<table className='bio-info-table'>
						<tr>
							<td colSpan={2} className='category-title'>
								যোগাযোগ
							</td>
						</tr>
						<tr>
							<td>অভিভাবকের নাম্বার</td>
							<td>{contactInfo?.guardiansPhoneNumber}</td>
						</tr>
						<tr>
							<td>যার নাম্বার লিখেছেন</td>
							<td>{contactInfo?.relationWithGuardian}</td>
						</tr>
						<tr>
							<td>বায়োডাটা গ্রহণের ই-মেইল এড্রেস</td>
							<td>{contactInfo?.EmailForResponse}</td>
						</tr>
						<tr>
							<td>আপনার নাম্বার</td>
							<td>{contactInfo?.candidatesPhoneNumber}</td>
						</tr>
					</table>
				)}

				{/* contact with other parents */}
				{admin ? (
					<div className='d-flex justify-content-center align-items-center'>
						<button className="btn btn-success mlr-1" onClick={handleAccept}>Accept</button>
						<button className="btn btn-danger mlr-1" onClick={handleReject}>Reject</button>
					</div>
				) : (
					<table className='biodata-details-table'>
						<tr>
							<td colSpan={2} className='category-title'>
								কর্তৃপক্ষের সাথে যোগাযোগ করুন
							</td>
						</tr>
						<tr>
							<td colSpan={2}>
								<p className='contact-text'>
									আপনার যদি কোনো বায়োডাটা পছন্দ হয় এবং আপনি উক্ত বায়োডাটাটির
									অভিভাবকের সাথে যোগাযোগ করতে আগ্রহী হন, তাহলে নিচের বাটনে ক্লিক
									করুন।
								</p>
							</td>
						</tr>
						<tr>
							<td colSpan={2} className='category-title'>
								<Link to='/contact-request'>
									<button className='category-button'>যোগাযোগ করুন</button>
								</Link>
							</td>
						</tr>
					</table>
				)}
			</div>
		</div>
	);
}

export default BiodataDetailsContainer;
