import React, { useState } from 'react'


// styles
import './BioprofileContainer/BioprofileContainer.css';
import '../../../../styles/utils.scss'


const BioprofileContainer = () => {

    return ( 
            <div className='container pt-4 pb-5'>
				<div className=''>
                    <div className='main-div'>
                        <div className="image-div">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiVVrzvJxFLcIOE9oE0OfI7UdITM_hz_flw&usqp=CAU">
                        </div>
                        <div className="bio-no-div">
                            <p>Biodata No: 123</p>
                        </div>
                        <div className="table-div">
                        <ul className="tabs-content custom">
                            <li active id="e0a6b8e0a6bee0a6a7e0a6bee0a6b0e0a6a3-e0a6a4e0a6a5e0a78de0a6afTab" class="active regulartab">
                                <dl className="dl-horizontal">
                                    <dt className="dt-div" >বায়োডাটার ধরন</dt>
                                    <dd className="dd-div">
                                        <p>পাত্রীর বায়োডাটা</p>
                                    </dd>
                                    <dt className="dt-div">বৈবাহিক অবস্থা</dt>
                                    <dd className="dd-div">
                                        <p>অবিবাহিত</p>
                                    </dd>
                                    <dt className="dt-div">স্থায়ী ঠিকানা</dt>
                                    <dd className="dd-div">
                                        <p>ঢাকা</p>
                                    </dd>
                                    <dt className="dt-div">বিভাগ</dt>
                                    <dd className="dd-div">
                                        <p>ঢাকা বিভাগ</p>
                                    </dd>
                                    <dt className="dt-div">বর্তমান ঠিকানা</dt>
                                    <dd className="dd-div">
                                        <p>ঢাকা</p>
                                    </dd>
                                    <dt className="dt-div">বিভাগ </dt>
                                    <dd class="dd-div">
                                        <p>ঢাকা বিভাগ</p>
                                    </dd>
                                    <dt className="dt-div">জন্মসন (আসল)</dt>
                                    <dd className="dd-div">
                                        <p>২০০০</p>
                                    </dd>
                                    <dt className="dt-div">গাত্রবর্ণ</dt>
                                    <dd className="dd-div">
                                        <p>কালো</p>
                                    </dd>
                                    <dt className="dt-div">উচ্চতা</dt>
                                    <dd className="dd-div">
                                        <p>৫&#039;১&#039;&#039;</p>
                                    </dd>
                                    <dt className="dt-div">ওজন</dt>
                                    <dd className="dd-div">
                                        <p>৬০ কেজি</p>
                                    </dd>
                                    <dt className="dt-div">রক্তের গ্রুপ</dt>
                                    <dd className="dd-div">
                                        <p>B-</p>
                                    </dd>
                                    <dt className="dt-div">পেশা</dt>
                                    <dd className="dd-div">
                                        <p>ছাত্রী</p>
                                    </dd>
                                </dl>
                            </li>
                        </ul>

                    </div>     
				</div>
			</div>
        </div>
		);
  }
  

export default BioprofileContainer;