import React from 'react';
import './bio-address-container.css';

function BioAddress(){
    return <div className="main">
            <ul className="ul-tag">
                <li className="li-tag">
                    <div>
                        <h5 className="head-thikana">ঠিকানা</h5>
                    </div>
                    <div className="br">

                    </div>
                    <div className="each-pii">
                        <label className="address-lable">স্থায়ী ঠিকানা</label>
                        <div>
                            <p>Narayanganj</p>
                        </div>
                    </div>
                    <div className="each-pii">
                        <label className="address-lable">বর্তমান ঠিকানা</label>
                        <div>
                            <p>Narayanganj</p>
                        </div>
                    </div>
                    <div className="each-pii">
                        <label className="address-lable">কোথায় বড় হয়েছেন ?</label>
                        <div>
                            <p>Narayanganj</p>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
}

export default BioAddress;