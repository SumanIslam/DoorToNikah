import React from 'react';
import { Link } from 'react-router-dom';

// mui icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';

// styles
import '../../../../styles/utils.scss';
import './form-container-nav.style.scss';

const FormContainerNav = () => {
  return (
		<>
			<ul className='item-nav'>
				<li>
					<a href='#' className='view'>
						<VisibilityIcon /> View
					</a>
				</li>
				<li>
					<button
						type='button'
						className='biodata-approve'
						data-bs-toggle='modal'
						data-bs-target='#exampleModal'
					>
						বায়োডাটা এপ্রুভ না হওয়ার কারণগুলো জেনে নিন
					</button>
				</li>
				<li>
					<Link to='/biodata/registration/step1' className='edit'>
						<CreateIcon /> Edit
					</Link>
				</li>
			</ul>
			{/* modal */}
			<div
				className='modal fade  modal-lg'
				id='exampleModal'
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h2 className='modal-title text-center' id='exampleModalLabel'>
								আমরা বিভিন্ন কারণে বায়োডাটা এপ্রুভ করি না। তার মাঝে কয়েকটি কারণ
								উল্লেখ করা হলো-
							</h2>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							<ul class='list-group'>
								<li class='list-group-item bg-purple text-white'>
									<ArrowRightAltIcon /> আপনি যদি অভিভাবককে না জানিয়ে আমাদের
									ওয়েবসাইটে বায়োডাটা জমা দেন।
								</li>
								<li class='list-group-item bg-purple text-white'>
									<ArrowRightAltIcon /> অভিভাবকের নাম্বারের ঘরে নিজের নাম্বার
									লিখে রাখেন।
								</li>
								<li class='list-group-item bg-purple text-white'>
									<ArrowRightAltIcon /> ৫ ওয়াক্ত নামাযী না হোন।
								</li>
								<li class='list-group-item bg-purple text-white'>
									<ArrowRightAltIcon /> ওয়াজিব দাঁড়ি সুন্নতি পদ্ধতীতে বড় না
									থাকে। (পুরুষদের জন্য)।
								</li>
								<li class='list-group-item bg-purple text-white'>
									<ArrowRightAltIcon /> নিকাব সহ ফরজ পর্দা/বোরকা না পরেন।
									(নারীদের জন্য)
								</li>
								<li class='list-group-item bg-purple text-white'>
									<ArrowRightAltIcon /> হিজাব পরেন কিন্ত নিকাব পরেন না। (নারীদের
									জন্য)
								</li>
								<li class='list-group-item bg-purple text-white'>
									<ArrowRightAltIcon /> বায়োডাটাতে কোনো মিথ্যা তথ্য দিয়ে থাকলে।
								</li>
								<li class='list-group-item bg-purple text-white'>
									<ArrowRightAltIcon /> প্রশ্নের উত্তর স্পষ্ট ভাবে না দিয়ে অন্য
									ভাবে দিলে। যেমনঃ শুধু “আলহামদুলিল্লাহ” বা “হুম” ইত্যাদি লিখেন
									অনেকেই, অথচ এটি দ্বারা হ্যাঁ/না স্পষ্টভাবে বোঝা যায় না।
								</li>
								<li class='list-group-item bg-purple text-white'>
									<ArrowRightAltIcon /> কোনো গুরুত্বপূর্ণ প্রশ্নের উত্তর না দিয়ে
									ফাঁকা রেখে দিলে। যেমনঃ অনেকেই “কতৃপক্ষের জিজ্ঞাসা” উত্তর না
									দিয়েই পাবলিশ করেন।
								</li>
								<li class='list-group-item bg-purple text-white'>
									<ArrowRightAltIcon /> আলিয়া মাদ্রাসা শিক্ষিতদের জেনারেল
									সিলেক্ট করতে বলার পরেও কেউ যদি মাদ্রাসা সিলেক্ট করেন তাহলেও
									এপ্রুভ হয় না।
								</li>
							</ul>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FormContainerNav;