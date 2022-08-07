/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../../styles/utils.scss';
import './header.style.scss';

import { useEffect, useState } from "react";

const Header = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)
  }, [])

  const marginRight = innerWidth > 1205 ? 'mr-30' : 'mr-5';

  return (
    // white background navbar
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container container-fluid">
        {/* navbar logo */}
        <a className={`${marginRight} navbar-brand fs-2 fw-bold purple-color`} href="/"><span className="pink-color">DoorTo</span>Nikah</a>
        {/* navbar toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* navbar list */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item fw-semibold">
              <a className="nav-link purple-color" aria-current="page" href="#">হোম</a>
            </li>
            <li className="nav-item fw-semibold">
              <a className="nav-link purple-color" href="#">আমাদের সম্পর্কে</a>
            </li>
            <li className="nav-item fw-semibold">
              <a className="nav-link purple-color">প্রশ্ন ও উত্তর</a>
            </li>
            <li className="nav-item fw-semibold">
              <a className="nav-link purple-color">টিউটোরিয়াল</a>
            </li>
            <li className="nav-item fw-semibold">
              <a className="nav-link purple-color">যোগাযোগ</a>
            </li>
          </ul>
          <button type="button" className="btn btn-purple">ফ্রি রেজিষ্ট্রেশন</button>
          <button type="button" className="btn btn-pink ml-1">লগইন</button>
        </div>
      </div>
    </nav> 
  );
};

export default Header;
