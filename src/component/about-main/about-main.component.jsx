import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// data
import { aboutMainData } from "./about-main-data";

// style
import '../../styles/utils.scss';

const AboutMain = () => {
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
				{aboutMainData.map((data) => (
					<p key ={uuidv4()} className="text-justify fw-normal">{data.text}</p>
				))}
			</div>
      <hr/>
		</div>
	);
}

export default AboutMain;